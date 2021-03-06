# -*- coding: utf-8 -*-
# Generated by Django 1.11.22 on 2019-08-01 13:33


from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rsr', '0163_auto_20190801_0830'),
    ]

    operations = [
        migrations.CreateModel(
            name='DisaggregationTarget',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True, verbose_name='disaggregation target value')),
                ('dimension_value', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='disaggregation_targets', to='rsr.IndicatorDimensionValue')),
                ('period', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='disaggregation_targets', to='rsr.IndicatorPeriod', verbose_name='indicator')),
            ],
            options={
                'ordering': ('id',),
                'verbose_name': 'disaggregation target',
                'verbose_name_plural': 'disaggregation targets',
            },
        ),
    ]
