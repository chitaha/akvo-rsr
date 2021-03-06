# -*- coding: utf-8 -*-

"""
Akvo RSR is covered by the GNU Affero General Public License.

See more details in the license.txt file located at the root folder of the Akvo RSR module.
For additional details on the GNU license please see < http://www.gnu.org/licenses/agpl.html >.
"""

from django.conf import settings
from django.test import Client

from akvo.rsr.tests.base import BaseTestCase
from akvo.rsr.models import Partnership, PartnerSite, ProjectUpdate


class ProjectTypeaheadTest(BaseTestCase):

    def setUp(self):
        super(ProjectTypeaheadTest, self).setUp()
        self.organisation = self.create_organisation('Akvo')
        self.partner_site = PartnerSite.objects.create(
            organisation=self.organisation,
            hostname='akvo'
        )

        for i in range(1, 6):
            published = i < 4
            project = self.create_project(title='Project - {}'.format(i), published=published)

            # Add a partnership for a couple of projects
            if i in {1, 4}:
                self.make_partner(
                    project, self.organisation, Partnership.IATI_REPORTING_ORGANISATION)

        # Additional organisation for typeahead/organisations end-point
        self.create_organisation('UNICEF')

    def _create_client(self, host=None):
        """ Create and return a client with the given host."""
        if not host:
            host = settings.RSR_DOMAIN
        return Client(HTTP_HOST=host)

    def test_published_projects_on_rsr_host(self):
        # Given
        url = '/rest/v1/typeaheads/projects?format=json&published=1'
        client = self._create_client()

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 3)

    def test_all_projects_on_rsr_host(self):
        # Given
        url = '/rest/v1/typeaheads/projects?format=json'
        client = self._create_client()

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 5)

    def test_published_projects_on_partner_site(self):
        # Given
        url = '/rest/v1/typeaheads/projects?format=json&published=1'
        host = 'akvo.{}'.format(settings.AKVOAPP_DOMAIN)
        client = self._create_client(host)

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 1)

    def test_all_projects_on_partner_site(self):
        # Given
        url = '/rest/v1/typeaheads/projects?format=json'
        host = 'akvo.{}'.format(settings.AKVOAPP_DOMAIN)
        client = self._create_client(host)

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 2)

    def test_show_only_partner_orgs_on_partner_site(self):
        # Given
        url = '/rest/v1/typeaheads/organisations?format=json&partners=1'
        host = 'akvo.{}'.format(settings.AKVOAPP_DOMAIN)
        client = self._create_client(host)

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 1)

    def test_show_all_orgs_on_partner_site(self):
        # Given
        url = '/rest/v1/typeaheads/organisations?format=json'
        host = 'akvo.{}'.format(settings.AKVOAPP_DOMAIN)
        client = self._create_client(host)

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 2)

    def test_shows_all_orgs_on_rsr_site_when_only_partners_requested(self):
        # Given
        url = '/rest/v1/typeaheads/organisations?format=json&partners=1'
        client = self._create_client()

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 2)

    def test_show_all_orgs_on_rsr_site(self):
        # Given
        url = '/rest/v1/typeaheads/organisations?format=json'
        client = self._create_client()

        # When
        response = client.get(url)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 2)


class ProjectUpdateTypeaheadTest(BaseTestCase):

    def setUp(self):
        super(ProjectUpdateTypeaheadTest, self).setUp()

    def test_project_update_typeahead(self):
        # Given
        project = self.create_project('Foo')
        user = self.create_user('foo@example.com')
        ProjectUpdate.objects.create(project=project, user=user, title='First')
        ProjectUpdate.objects.create(project=project, user=user, title='Second')
        url = '/rest/v1/typeaheads/project_updates?format=json'

        # When
        response = self.c.get(url, follow=True)

        # Then
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['count'], 2)
        self.assertEqual({up['title'] for up in response.data['results']}, {'First', 'Second'})
