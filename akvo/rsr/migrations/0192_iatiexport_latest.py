# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-10-28 11:59
from __future__ import unicode_literals

from django.db import migrations, models


def set_latest(apps, schema):
    IatiExport = apps.get_model('rsr', 'IatiExport')
    status_completed = 3
    exports = IatiExport.objects.filter(is_public=True, status=status_completed)
    for export in exports:
        other_exports = exports.filter(
            id__gt=export.pk,
            reporting_organisation_id=export.reporting_organisation_id,
        )
        export.latest = not other_exports.exists()
        export.save(update_fields=['latest'])


class Migration(migrations.Migration):

    dependencies = [
        ('rsr', '0191_project_run_iati_checks'),
    ]

    operations = [
        migrations.AddField(
            model_name='iatiexport',
            name='latest',
            field=models.BooleanField(default=False, verbose_name='latest'),
        ),
        migrations.RunPython(set_latest,
                             reverse_code=lambda x, y: None),
    ]
