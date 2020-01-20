# -*- coding: utf-8 -*-
"""Akvo RSR is covered by the GNU Affero General Public License.

See more details in the license.txt file located at the root folder of the Akvo RSR module.
For additional details on the GNU license please see < http://www.gnu.org/licenses/agpl.html >.
"""

from akvo.rest.models import TastyTokenAuthentication
from akvo.rsr.models import Project, Indicator, IndicatorPeriod, IndicatorPeriodData
from akvo.rsr.models.result.utils import QUANTITATIVE
from decimal import Decimal, InvalidOperation
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TastyTokenAuthentication])
def project_results(request, pk):
    queryset = Project.objects\
        .prefetch_related('results', 'results__indicators')
    project = get_object_or_404(queryset, pk=pk)
    if not request.user.has_perm('rsr.view_project', project):
        raise Http404

    return Response([
        {
            'id': r.id,
            'title': r.title,
            'indicators': [
                {
                    'id': i.id,
                    'title': i.title,
                    'description': i.description,
                    'period_count': i.periods.count(),
                    'type': 'quantitative' if i.type == QUANTITATIVE else 'qualitative',
                    'measure': 'unit' if i.measure == '1' else 'percentage' if i.measure == '2' else None
                }
                for i
                in r.indicators.all()
            ],
        }
        for r
        in project.results.all()
    ])


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TastyTokenAuthentication])
def project_indicator_periods(request, project_pk, indicator_pk):
    queryset = Indicator.objects.prefetch_related('periods').select_related('result__project')
    indicator = get_object_or_404(queryset, pk=indicator_pk)
    project = indicator.result.project
    if project.id != int(project_pk) or not request.user.has_perm('rsr.view_project', project):
        raise Http404

    return Response(_drilldown_indicator_periods_contributions(indicator))


def _drilldown_indicator_periods_contributions(indicator):
    periods = _get_indicator_periods_hierarchy_flatlist(indicator)
    periods_tree = _make_periods_hierarchy_tree(periods)

    return [_transform_period_contributions_node(n) for n in periods_tree]


def _get_indicator_periods_hierarchy_flatlist(indicator):
    family = set(indicator.periods.values_list('pk', flat=True))
    while True:
        children = IndicatorPeriod.objects.filter(parent_period__in=family)\
            .values_list('pk', flat=True)
        if family.union(children) == family:
            break

        family = family.union(children)

    periods = IndicatorPeriod.objects.select_related(
        'indicator__result__project',
        'indicator__result__project__primary_location__country'
    ).prefetch_related(
        'data',
        'data__user',
        'data__approved_by',
        'data__comments',
        'data__comments__user',
        'data__disaggregations',
        'data__disaggregations__dimension_value',
        'data__disaggregations__dimension_value__name',
        'disaggregation_targets',
        'disaggregation_targets__dimension_value',
        'disaggregation_targets__dimension_value__name'
    ).filter(pk__in=family)

    return periods


def _make_periods_hierarchy_tree(list):
    tree = []
    lookup = {}
    ids = [p.id for p in list]

    for period in list:
        item_id = period.id
        parent_id = getattr(period.parent_period, 'id', None)

        if item_id not in lookup:
            lookup[item_id] = {'children': []}

        lookup[item_id]['item'] = period
        node = lookup[item_id]

        if not parent_id or parent_id not in ids:
            tree.append(node)
        else:
            if parent_id not in lookup:
                lookup[parent_id] = {'children': []}

            lookup[parent_id]['children'].append(node)

    return tree


def _transform_period_contributions_node(node):
    period = node['item']
    contributors, countries, aggregated_value, disaggregations = _transform_contributions_hierarchy(node['children'])
    contributors_count = len(contributors)
    updates = _transform_updates(period)

    result = {
        'period_id': period.id,
        'period_start': period.period_start,
        'period_end': period.period_end,
        'actual_comment': period.actual_comment.split(' | ') if period.actual_comment else None,
        'actual_value': _force_decimal(period.actual_value),
        'aggregated_value': aggregated_value,
        'target_value': _force_decimal(period.target_value),
        'countries': countries,
        'updates': updates,
        'disaggregation_targets': _transform_disaggregation_targets(period),
        'disaggregation_contributions': list(disaggregations.values()),
    }

    if contributors_count:
        result['contributors'] = contributors

    return result


def _transform_contributions_hierarchy(tree):
    contributors = []
    contributor_countries = []
    aggregated_value = 0
    disaggregations = {}
    for node in tree:
        contributor, countries = _transform_contributor_node(node)
        if contributor:
            contributors.append(contributor)
            contributor_countries = _merge_unique(contributor_countries, countries)
            aggregated_value += contributor['actual_value']
            disaggregation_contributions = _extract_disaggregation_contributions(contributor)
            for key in disaggregation_contributions:
                if key not in disaggregations:
                    disaggregations[key] = disaggregation_contributions[key].copy()
                else:
                    disaggregations[key]['value'] += disaggregation_contributions[key]['value']

    return contributors, contributor_countries, aggregated_value, disaggregations


def _extract_disaggregation_contributions(contributor):
    disaggregations = {}
    for update in contributor['updates']:
        if update['status']['code'] == 'A':
            for d in update['disaggregations']:
                key = (d['category'], d['type'])
                if key not in disaggregations:
                    disaggregations[key] = d.copy()
                else:
                    disaggregations[key]['value'] += d['value']

    return disaggregations


def _transform_contributor_node(node):
    contributor = _transform_contributor(node['item'])
    contributor_countries = []
    if contributor:
        if contributor['country']:
            contributor_countries.append(contributor['country'])
        contributors, countries, aggregated_value, disaggregations = _transform_contributions_hierarchy(node['children'])
        contributors_count = len(contributors)
        if contributors_count:
            contributor['aggregated_value'] = aggregated_value
            contributor['contributors'] = contributors
            contributor['disaggregation_contributions'] = list(disaggregations.values())
            contributor_countries = _merge_unique(contributor_countries, countries)

    return contributor, contributor_countries




def _transform_contributor(period):
    value = _force_decimal(period.actual_value)

    if value < 1 and period.data.count() < 1:
        return None

    project = period.indicator.result.project
    country = getattr(project.primary_location, 'country', None)
    updates = _transform_updates(period)

    return {
        'project_id': project.id,
        'project_title': project.title,
        'period_id': period.id,
        'country': {'iso_code': country.iso_code} if country else None,
        'actual_comment': period.actual_comment.split(' | ') if period.actual_comment else None,
        'actual_value': value,
        'updates': updates,
        'disaggregation_targets': _transform_disaggregation_targets(period),
    }


def _transform_updates(period):
    return [
        {
            'update_id': u.id,
            'status': {'code': u.status, 'name': dict(IndicatorPeriodData.STATUSES)[u.status]},
            'user': {
                'user_id': u.user.id,
                'email': u.user.email,
            } if u.user else None,
            'approved_by': {
                'user_id': u.approved_by.id,
                'email': u.approved_by.email,
            } if u.approved_by else None,
            'value': u.value,
            'numerator': u.numerator,
            'denominator': u.denominator,
            'comments': [
                {
                    'comment_id': c.id,
                    'user': {
                        'user_id': c.user.id,
                        'email': c.user.email,
                    },
                    'comment': c.comment,
                    'created_at': c.created_at,
                }
                for c
                in u.comments.all()
            ],
            'disaggregations': [
                {
                    'category': d.dimension_value.name.name,
                    'type': d.dimension_value.value,
                    'value': d.value,
                    'numerator': d.numerator,
                    'denominator': d.denominator,
                }
                for d
                in u.disaggregations.all()
            ],
            'created_at': u.created_at,

        }
        for u
        in period.data.all()
    ]


def _transform_disaggregation_targets(period):
     return [
        {
            'category': t.dimension_value.name.name,
            'type': t.dimension_value.value,
            'value': t.value,
        }
        for t
        in period.disaggregation_targets.all()
    ]


def _force_decimal(value):
    try:
        return Decimal(value)
    except (InvalidOperation, TypeError):
        return Decimal(0)


def _merge_unique(l1, l2):
    out = list(l1)
    for i in l2:
        if i not in out:
            out.append(i)

    return out
