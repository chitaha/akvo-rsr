# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-10-28 06:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rsr', '0190_auto_20201015_0325'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='run_iati_checks',
            field=models.BooleanField(default=False, help_text='Flag to indicate that the project has pending IATI checks to be run', verbose_name='run iati checks'),
        ),
    ]