# -*- coding: utf-8 -*-
# Generated by Django 1.11.22 on 2019-08-01 08:30


from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rsr', '0162_auto_20190730_1750'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='indicatordimension',
            name='indicator',
        ),
        migrations.RemoveField(
            model_name='indicatordimension',
            name='parent_dimension',
        ),
        migrations.DeleteModel(
            name='IndicatorDimension',
        ),
    ]
