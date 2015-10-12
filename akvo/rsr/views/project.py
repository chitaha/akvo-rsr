# -*- coding: utf-8 -*-
"""
Akvo RSR is covered by the GNU Affero General Public License.

See more details in the license.txt file located at the root folder of the
Akvo RSR module. For additional details on the GNU license please see
< http://www.gnu.org/licenses/agpl.html >.
"""

import json
from django.core import serializers

from sorl.thumbnail import get_thumbnail
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.core.urlresolvers import reverse
from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, redirect, render
from lxml import etree

from ..forms import ProjectUpdateForm
from ..filters import remove_empty_querydict_items, ProjectFilter
from ..models import Project, ProjectUpdate, Organisation
from ...utils import pagination, filter_query_string
from ...iati.exports.iati_export import IatiXML
from .utils import apply_keywords, org_projects


###############################################################################
# Project directory
###############################################################################


def _all_projects():
    """Return all active projects."""
    return Project.objects.published().select_related(
        'publishingstatus__status',
        'sync_owner',
        'primary_location',
        'primary_location__country'
        'locations',
        'partnerships',
        'partnerships__organisation',
        'sectors',
        'partners',
    ).order_by('-id')


def _page_projects(page):
    """Dig out the list of projects to use.

    First get a list based on page settings (orgs or all projects). Then apply
    keywords filtering / exclusion.
    """
    projects = org_projects(page.organisation) if page.partner_projects else _all_projects()
    return apply_keywords(page, projects)


def _project_directory_coll(request):
    """Dig out and pass correct projects to the view."""
    page = request.rsr_page
    if not page:
        return _all_projects()
    return _page_projects(page)


def directory(request):
    """The project list view."""
    qs = remove_empty_querydict_items(request.GET)

    # Set show_filters to "in" if any filter is selected
    show_filters = "in"  # To simplify template use bootstrap class
    available_filters = ['location', 'status', 'organisation', 'sector', 'sort_by']
    if frozenset(qs.keys()).isdisjoint(available_filters):
        show_filters = ""

    # Prepare sorting
    available_sorting = ['last_modified_at', '-last_modified_at', 'title',
                         '-title', 'budget', '-budget', ]
    sort_by = request.GET.get('sort_by', '-last_modified_at')
    sorting = sort_by if sort_by in available_sorting else '-last_modified_at'

    # Yank project collection
    all_projects = _project_directory_coll(request)
    f = ProjectFilter(qs, queryset=all_projects)
    sorted_projects = f.qs.distinct().order_by(sorting)

    # Build page
    page = request.GET.get('page')
    page, paginator, page_range = pagination(page, sorted_projects, 10)

    # Get the current org filter for typeahead
    org_filter = request.GET.get('organisation', '')

    # Get projects to be displayed on the map
    map_projects = all_projects if request.rsr_page and request.rsr_page.all_maps else page

    context = {
        'project_count': sorted_projects.count(),
        'filter': f,
        'page': page,
        'page_range': page_range,
        'paginator': paginator,
        'show_filters': show_filters,
        'q': filter_query_string(qs),
        'sorting': sorting,
        'current_org': org_filter,
        'map_projects': map_projects,
    }
    return render(request, 'project_directory.html', context)


###############################################################################
# Project main
###############################################################################


def _get_accordion_data(project):
    return dict(
        background=project.background,
        current_status=project.current_status,
        project_plan=project.project_plan,
        target_group=project.target_group,
        sustainability=project.sustainability,
        goals_overview=project.goals_overview
    )


def _get_carousel_data(project):
    photos = []
    if project.current_image:
        try:
            im = get_thumbnail(project.current_image, '750x400', quality=99)
            photos.append({
                "url": im.url,
                "caption": project.current_image_caption,
                "credit": project.current_image_credit,
                "original_url": project.current_image.url,
            })
        except IOError:
            pass
    for update in project.updates_desc():
        if len(photos) > 9:
            break
        if update.photo:
            try:
                im = get_thumbnail(update.photo, '750x400', quality=99)
                photos.append({
                    "url": im.url,
                    "caption": update.photo_caption,
                    "credit": update.photo_credit,
                    "original_url": update.photo.url,
                })
            except IOError:
                continue
    return {"photos": photos}


def _get_hierarchy_row(max_rows, projects):
    """Return a column for the project hierarchy with a division.

    E.g. with a max_rows of 4 and one project, it will return [False,
    <Project>, False, False].
    """
    project_count = projects.count()
    if max_rows == project_count:
        return [project for project in projects]
    empty_begin = (max_rows - project_count) / 2
    empty_end = (max_rows - project_count) / 2 + ((max_rows - project_count) % 2)
    rows = []
    for row in range(empty_begin):
        rows.append(False)
    for project in projects:
        rows.append(project)
    for row in range(empty_end):
        rows.append(False)
    return rows


def _get_hierarchy_grid(project):
    parents = project.parents()
    siblings = project.siblings()
    children = project.children()

    # Create the lay-out of the grid
    max_rows = max(parents.count(), siblings.count() + 1, children.count())
    parent_rows = _get_hierarchy_row(max_rows, parents)
    siblings_rows = _get_hierarchy_row(max_rows - 1, siblings)
    siblings_rows.insert((max_rows - 1) / 2, 'project')
    children_rows = _get_hierarchy_row(max_rows, children)

    grid = []
    project_added = False
    for row in range(max_rows):
        grid.append([])
        grid[row].append([parent_rows[row], 'parent']) if parent_rows[row] else grid[row].append(None)
        if siblings_rows[row] == 'project':
            grid[row].append([project, 'project'])
            project_added = True
        elif not project_added:
            grid[row].append([siblings_rows[row], 'sibling-top']) if siblings_rows[row] else grid[row].append(None)
        else:
            grid[row].append([siblings_rows[row], 'sibling-bottom']) if siblings_rows[row] else grid[row].append(None)
        grid[row].append([children_rows[row], 'child']) if children_rows[row] else grid[row].append(None)

    return grid


def _get_partners_with_types(project):
    partners_dict = {}
    for partner in project.all_partners():
        partners_dict[partner] = partner.has_partner_types(project)
    return partners_dict


def _get_indicator_updates_data(updates):
    updates_list = []
    for update in updates.filter(indicator_period__gt=0):
        updates_list.append({
            "id": update.pk,
            "indicator_period": update.indicator_period.pk,
            "change": str(update.period_update),
            "date": str(update.time_gmt),
            "user": update.user.get_full_name(),
            "text": update.text,
            "photo": update.photo.url if update.photo else '',
            "target": str(update.indicator_period.target_value) or ''
        })
    return updates_list


def main(request, project_id):
    """The main project page."""
    project = get_object_or_404(Project, pk=project_id)

    # Non-editors are not allowed to view unpublished projects
    if not project.is_published() and not request.user.has_perm('rsr.change_project', project):
        raise PermissionDenied

    updates = project.project_updates.select_related('user').order_by('-created_at')
    #indicator_updates = serializers.serialize('json', updates, fields=('id', 'text'))
    carousel_data = _get_carousel_data(project)
    accordion_data = _get_accordion_data(project)
    partner_types = _get_partners_with_types(project)
    indicator_updates = json.dumps(_get_indicator_updates_data(updates))

    # Reporting org
    rep_org = project.reporting_org()
    rep_org_info = (rep_org, rep_org.has_partner_types(project)) if rep_org else None

    # Updates pagination
    page = request.GET.get('page')
    page, paginator, page_range = pagination(page, updates, 10)

    context = {
        'project': project,
        'accordion_data': json.dumps(accordion_data),
        'carousel_data': json.dumps(carousel_data),
        'partners': partner_types,
        'updates': updates,
        'indicator_updates': indicator_updates,
        'pledged': project.get_pledged(),
        'reporting_org': rep_org_info,
        'page': page,
        'page_range': page_range,
        'paginator': paginator,        
    }

    return render(request, 'project_main.html', context)


###############################################################################
# Project hierarchy
###############################################################################


def hierarchy(request, project_id):
    """."""
    project = get_object_or_404(Project, pk=project_id)

    # Non-editors are not allowed to view unpublished projects
    if not project.is_published() and not request.user.has_perm('rsr.change_project', project):
        raise PermissionDenied

    if not project.has_relations():
        raise Http404

    hierarchy_grid = _get_hierarchy_grid(project)

    context = {
        'project': project,
        'hierarchy_grid': hierarchy_grid,
    }

    return render(request, 'project_hierarchy.html', context)


###############################################################################
# Old links, now incorporated in tabs of the project main page
###############################################################################


def report(request, project_id):
    """Show the full data report tab on the project main page."""
    return HttpResponseRedirect(
        reverse('project-main', kwargs={'project_id': project_id})
        + '#report'
    )


def partners(request, project_id):
    """Show the partners tab on the project main page."""
    return HttpResponseRedirect(
        reverse('project-main', kwargs={'project_id': project_id})
        + '#partners'
    )


def finance(request, project_id):
    """Show finance tab on the project main page."""
    return HttpResponseRedirect(
        reverse('project-main', kwargs={'project_id': project_id})
        + '#finance'
    )

###############################################################################
# Project IATI file
###############################################################################


def iati(request, project_id):
    """Generate the IATI file on-the-fly and return the XML."""
    iati_activities = IatiXML(Project.objects.filter(pk=project_id)).iati_activities
    xml_data = etree.tostring(etree.ElementTree(iati_activities))
    return HttpResponse(xml_data, content_type="text/xml")


###############################################################################
# Project widgets
###############################################################################


def widgets(request, project_id):
    """."""
    project = get_object_or_404(Project, pk=project_id)
    selected_widget = request.GET.get('widget', None)

    # Non-editors are not allowed to view unpublished projects
    if not project.is_published() and not request.user.has_perm('rsr.change_project', project):
        raise PermissionDenied

    context = {
        'project': project,
        'style': 'darkBG',
    }

    if selected_widget in ['narrow', 'cobranded', 'small', 'map', 'list']:
        context['widget'] = selected_widget
        context['domain_url'] = 'http://' + request.META['HTTP_HOST']
        return render(request, 'project_widgets2.html', context)

    else:
        return render(request, 'project_widgets.html', context)


@login_required()
def set_update(request, project_id, edit_mode=False, form_class=ProjectUpdateForm, update_id=None):
    """."""
    project = get_object_or_404(Project, id=project_id)

    # Non-editors are not allowed to view unpublished projects
    if not project.is_published() and not request.user.has_perm('rsr.change_project', project):
        raise PermissionDenied

    # Check if user is allowed to place updates for this project
    allow_update = False
    if request.user.has_perm('rsr.post_updates', project):
        allow_update = True

    updates = project.updates_desc()[:5]
    update = None

    if update_id is not None:
        edit_mode = True
        update = get_object_or_404(ProjectUpdate, id=update_id)
        if not request.user == update.user:
            request.error_message = u'You can only edit your own updates.'
            raise PermissionDenied

        if update.edit_window_has_expired():
            request.error_message = u'You cannot edit this update anymore, the 30 minutes time limit has passed.'
            raise PermissionDenied

    if request.method == 'POST':
        updateform = form_class(request.POST, request.FILES, instance=update)
        if updateform.is_valid():
            update = updateform.save(project=project, user=request.user)
            return redirect(update.get_absolute_url())
    else:
        updateform = form_class(instance=update)

    context = {
        'project': project,
        'updates': updates,
        'update': update,
        'updateform': updateform,
        'edit_mode': edit_mode,
        'allow_update': allow_update
    }

    return render(request, 'update_add.html', context)


def search(request):
    """."""
    context = {'projects': Project.objects.published()}
    return render(request, 'project_search.html', context)


def donations_disabled(project):
    """."""
    return not project.donate_button


def can_accept_donations(project):
    """."""
    if project in Project.objects.active() and project.funds_needed > 0:
        return True
    else:
        return False


def donate(request, project_id):
    """."""
    project = get_object_or_404(Project, pk=project_id)

    if not project.accepts_donations():
        raise Http404

    context = {
        'project': project
    }
    return render(request, 'project_donate.html', context)
