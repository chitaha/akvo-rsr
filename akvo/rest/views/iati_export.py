# -*- coding: utf-8 -*-

# Akvo RSR is covered by the GNU Affero General Public License.
# See more details in the license.txt file located at the root folder of the Akvo RSR module.
# For additional details on the GNU license please see < http://www.gnu.org/licenses/agpl.html >.


from akvo.rest.serializers import IatiActivityExportSerializer, IatiExportSerializer
from akvo.rest.viewsets import BaseRSRViewSet
from akvo.rsr.models import IatiActivityExport, IatiExport


class IatiExportViewSet(BaseRSRViewSet):
    """
    """
    queryset = IatiExport.objects.all()
    serializer_class = IatiExportSerializer
    filter_fields = ('reporting_organisation', 'user', 'version', 'status', 'is_public')


class IatiActivityExportViewSet(BaseRSRViewSet):
    """
    """
    queryset = IatiActivityExport.objects.all()
    serializer_class = IatiActivityExportSerializer
    filter_fields = ('iati_export', 'project', 'status')
