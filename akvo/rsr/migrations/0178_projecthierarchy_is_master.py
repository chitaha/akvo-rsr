# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-07-29 08:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rsr', '0177_indicator_target_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='projecthierarchy',
            name='is_master',
            field=models.BooleanField(default=False, verbose_name='is master program'),
        ),
    ]
