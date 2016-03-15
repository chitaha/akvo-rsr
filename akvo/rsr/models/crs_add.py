# -*- coding: utf-8 -*-

# Akvo RSR is covered by the GNU Affero General Public License.
# See more details in the license.txt file located at the root folder of the Akvo RSR module.
# For additional details on the GNU license please see < http://www.gnu.org/licenses/agpl.html >.


from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _

from ..fields import ValidXMLCharField

from akvo.codelists.models import (CRSAddOtherFlags, LoanRepaymentType, LoanRepaymentPeriod,
                                   Currency, CRSChannelCode)
from akvo.codelists.store.codelists_v202 import (C_R_S_ADD_OTHER_FLAGS, LOAN_REPAYMENT_TYPE,
                                                 LOAN_REPAYMENT_PERIOD, CURRENCY,
                                                 C_R_S_CHANNEL_CODE)
from akvo.utils import codelist_choices, codelist_value


class CrsAdd(models.Model):
    """
    Items specific to CRS++ reporting. Can only occur once per project.
    """
    project = models.OneToOneField('Project', primary_key=True)
    loan_terms_rate1 = models.DecimalField(
        _(u'loan terms rate 1'), blank=True, null=True, max_digits=5, decimal_places=2,
        validators=[MaxValueValidator(100), MinValueValidator(0)]
    )
    loan_terms_rate2 = models.DecimalField(
        _(u'loan terms rate 2'), blank=True, null=True, max_digits=5, decimal_places=2,
        validators=[MaxValueValidator(100), MinValueValidator(0)]
    )
    repayment_type = ValidXMLCharField(
        _(u'loan terms repayment type'), max_length=1,
        choices=codelist_choices(LOAN_REPAYMENT_TYPE), blank=True
    )
    repayment_plan = ValidXMLCharField(
        _(u'loan terms repayment plan'), max_length=2,
        choices=codelist_choices(LOAN_REPAYMENT_PERIOD), blank=True
    )
    commitment_date = models.DateField(_(u'loan terms commitment date'), null=True, blank=True)
    repayment_first_date = models.DateField(_(u'loan terms first repayment date'), null=True,
                                            blank=True)
    repayment_final_date = models.DateField(_(u'loan terms final repayment date'), null=True,
                                            blank=True)
    loan_status_year = models.PositiveIntegerField(
        _(u'loan status year'), blank=True, null=True, max_length=4
    )
    loan_status_currency = ValidXMLCharField(
        _(u'loan status currency'), blank=True, max_length=3, choices=codelist_choices(CURRENCY)
    )
    loan_status_value_date = models.DateField(_(u'loan status value date'), blank=True, null=True)
    interest_received = models.DecimalField(
        _(u'loan status interest received'), max_digits=10, decimal_places=2, blank=True, null=True
    )
    principal_outstanding = models.DecimalField(
        _(u'loan status principal outstanding'), max_digits=10, decimal_places=2, blank=True,
        null=True
    )
    principal_arrears = models.DecimalField(
        _(u'loan status principal arrears'), max_digits=10, decimal_places=2, blank=True, null=True
    )
    interest_arrears = models.DecimalField(
        _(u'loan status interest arrears'), max_digits=10, decimal_places=2, blank=True, null=True
    )
    channel_code = ValidXMLCharField(
        _(u'channel code'), blank=True, max_length=5, choices=codelist_choices(C_R_S_CHANNEL_CODE))

    def __unicode__(self):
        return u'CRS++'

    def iati_repayment_type(self):
        return codelist_value(LoanRepaymentType, self, 'repayment_type')

    def iati_repayment_plan(self):
        return codelist_value(LoanRepaymentPeriod, self, 'repayment_plan')

    def iati_currency(self):
        return codelist_value(Currency, self, 'loan_status_currency')

    def iati_channel_code(self):
        return codelist_value(CRSChannelCode, self, 'channel_code')

    class Meta:
        app_label = 'rsr'
        verbose_name = _(u'CRS reporting')
        verbose_name_plural = _(u'CRS reporting')


class CrsAddOtherFlag(models.Model):
    """
    Other flag of CRS++ reporting.
    """
    crs = models.ForeignKey('CrsAdd', verbose_name=u'crs', related_name='other_flags')
    code = ValidXMLCharField(
        _(u'code'), max_length=1, choices=codelist_choices(C_R_S_ADD_OTHER_FLAGS)
    )
    significance = models.NullBooleanField(_(u'significance'), blank=True)

    def __unicode__(self):
        if self.code:
            try:
                return self.iati_code().name
            except AttributeError:
                return self.iati_code()
        else:
            return u'%s' % _(u'No other flag code specified')

    def iati_code(self):
        return codelist_value(CRSAddOtherFlags, self, 'code')

    class Meta:
        app_label = 'rsr'
        verbose_name = _(u'CRS other flag')
        verbose_name_plural = _(u'CRS other flags')
