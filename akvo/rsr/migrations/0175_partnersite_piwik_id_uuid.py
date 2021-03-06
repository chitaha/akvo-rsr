# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-06-01 14:38
from __future__ import unicode_literals

from django.db import migrations, models

PIWIK_IDS = {
    "eutf-syria": "31970dea-d759-4382-8021-d99b2c9bb80c",
    "waste": "b93c0717-cc39-40ce-b32f-db095ddb7f31",
    "nuffic": "40be598c-6639-4294-8f3b-7b29b9cb5554",
    "akvoapp": "8ccf2eef-986d-42d6-87a6-35da57b2672c",
    "nlembassyindonesia": "88442017-6fe1-418f-91f7-43e106dc53ed",
    "watershed": "1d89efda-d7fe-4a86-9cd7-59c1ee49d0af",
    "unicefpacific": "f5992f9e-d951-4ae1-b5f7-fe670469e730",
    "afrialliance": "393d6467-2676-4c6c-89e0-c2b38da0ba05",
    "yepprogrammes": "aaba1d26-4dba-45da-b486-2a8bec920f70",
    "worldveg": "063a5e08-e668-4982-a7ba-d3a8bb8cb63e",
    "washmali": "19132a50-8e8b-4206-a050-d8d341b511f5",
    "wandelenvoorwater2017": "1c2fab9b-e397-49bd-bd7e-a3d759a23604",
    "wandelenvoorwater2016": "6b7a5a40-0de1-4309-9415-e86bbe538c28",
    "walkingforwater2017": "f9f8a2eb-49e3-43b0-b8be-a94ef5c060b5",
    "walkingforwater2016": "bf3dbf2a-ab02-45d9-82f1-fa898efb877d",
    "vnginternational": "a31dc7c9-7e64-4368-8321-e92adf25c7dd",
    "snvworld": "9fe15a23-9fa6-4fc8-b274-c29991d857aa",
    "planfinland": "e7fcb3f4-c92c-466e-a4eb-e700a575bbdc",
    "pind": "58ff8778-0cba-4f51-950c-3cfcff0f7c9d",
    "nso-g4aw": "21927a9a-e693-4d5f-9fd4-7058cfda5993",
    "nso-g4w": "21927a9a-e693-4d5f-9fd4-7058cfda5993",
    "nlembassymozambique": "20aea77c-c099-41dc-9ca6-4280c0636bb1",
    "nlembassykenya": "1710ab0c-fa1d-4691-a282-bc444db040a9",
    "leprosyrelief": "6798372d-e8bd-4f79-a8cf-1ca10a587b6d",
    "kega": "272ffd69-58c2-46cc-9084-e487b8682887",
    "iggwater": "c8b71fac-b658-4239-9958-dc343c6649b6",
    "iccoindia": "0f65be79-6afe-4a64-967f-2186bca9be53",
    "iccoasia": "077ba3cc-e982-4c20-9270-79fc2650af78",
    "eutf": "2c79ae3e-5738-4fac-87aa-e5ff3ec18119",
    "drydev": "63bbac2a-df02-4ecf-b0d0-6ac6b83609e0",
    "akvowestafrica": "57b927b2-cc0c-4dc6-81a4-1bc0ac4e9403",
    "akvoppp3": "9ed5c905-fa6a-4ffd-ad7a-0fe0ced59635",
    "akvoflow": "0282e976-f937-4f0e-93a9-541cb9189dc5",
    "akvoeastafrica": "be28ba95-10e0-4d44-9161-5af121347988",
    "afdb": "9ac0a6c4-8646-4dec-8770-b777bada7abc",
    "earthwater": "7cfa5ff2-4b17-440c-bd8f-16ad3dca38d6",
    "aqua4all": "eef2815d-c45c-48ee-ac72-7519602382a9",
    "aquaforall": "eef2815d-c45c-48ee-ac72-7519602382a9",
    "yepwater": "89f3d17f-0a96-44b5-8033-093fb3438aac",
    "wandelenvoorwater2015": "1c1272bd-6066-4aed-b607-4321ed909959",
    "wandelenvoorwater2014": "9a989ae4-7dca-45ab-93dd-8d020074f24a",
    "wandelenvoorwater2013": "9cce4503-9fa0-4b75-9ae5-b756303a738f",
    "wandelenvoorwater": "5b3b9e7f-b170-44c1-8fb8-61338afe5647",
    "worldcoaches": "3589a0f6-1719-4ac4-90ec-e56fa28c5f31",
    "knvb": "e776d444-8b1d-42ea-8088-6185431bcd79",
    "philipsafricaroadshow": "9128238f-ce74-4261-9e87-e4f42df0d666",
    "waterforlife": "fffa9d12-6519-408e-bc8c-c298b3928c31",
    "wash-liberia": "13ef20ea-60f4-4072-bcaf-9d225bffbf90",
    "walkingforwater2015": "8933456c-e540-4043-82e1-86b027bd1a81",
    "walkingforwater2014": "f4292514-b871-4c78-b15f-78071b324d73",
    "walkingforwater2013": "3aca88a8-548b-450d-a844-7cedafefa579",
    "walkingforwater": "a94babed-e36a-44dc-bcec-a16b79d8119b",
    "vjnns": "ccc40951-e369-44fc-ab31-afcb5446be4d",
    "vei": "3d4ad0fe-75a5-4f63-9f2f-7f1157686ef0",
    "texttochangec4c": "28384ef4-d19e-4f96-833c-c69bfe1f54c2",
    "sujol": "6b2760d0-d7b5-42b9-ba2b-8f23e62f7c8b",
    "srhr": "08eb67e3-fcf3-492d-964a-91fa1ce0a74d",
    "sportfordevelopment": "a2d1d2d3-e918-42fc-87da-61d8010b2795",
    "simavi": "448e3201-f771-4c20-a976-591cf249313b",
    "rain4food": "d0158ec3-8bc5-4615-889d-56e89884fca8",
    "redticbolivia": "42358ec1-8f48-4927-a9d6-c7a7eeeab665",
    "rijksdienst-voor-het-cultureel-erfgoed": "dddd0bea-9390-4a82-bdd0-4bf28f678815",
    "wump3r": "a206f777-58cb-4b54-a881-47c439006432",
    "prosportmozambique": "25667bf9-43a6-40b7-8c2a-c06445f5ec0b",
    "prfektkontor": "aa2b6f9c-1332-484c-bbc6-05f9dcbad5d4",
    "egoodwater": "8dbee6fb-f2a3-4f7d-98d8-81cc6a034d6a",
    "owa": "d498fbc7-a5de-46a9-abc0-6ddfdde282d1",
    "nexusheritage": "967d289b-2247-45d5-ab7a-961a93f818a5",
    "nearch": "4180a06e-2e24-4fe3-a493-bdbc97a8a6f5",
    "mars": "1b975f45-4c3f-4f9e-a1d3-aa65cea44a22",
    "leidenarch": "4565498b-ac43-4da5-9481-40ed6978fbd3",
    "nsa": "a4dcd913-cbf7-4bb6-93cc-195dd512103a",
    "impulsis": "55e95c2f-da63-49fb-9b7e-e47b6e71121f",
    "iicd": "7ebaec6f-a953-430b-b08d-d6f487e64b70",
    "icco": "685c0a05-fa32-40b5-9332-e63230e9a30b",
    "greenadsblue": "6f58e79d-81f1-46be-b902-cd822d21e24a",
    "gnwp": "3238d760-e8f4-4804-8f49-ae46d99ecf97",
    "ginks": "897c43d0-f190-41a7-829a-a1beb8cc8a21",
    "mozambiquef4w": "a3c134ca-1360-44c6-a41c-200693ee52b5",
    "kenyaf4w": "0d7475a1-3384-4929-aad3-48b8680a434e",
    "ghanaf4w": "55e077cb-928c-43e8-b50d-6eb7c982b442",
    "f4winternational": "27b081b4-64ee-492b-8aa8-82326c21f98c",
    "agentschapnl": "7de99064-fd40-4ee9-adbb-f3062c20e896",
    "edukans": "8af8bffb-9d51-4a83-bb92-1c29af1e8cee",
    "ecom": "f57c521f-aa91-49d6-881e-5fa73acd3b20",
    "washalliance": "c4a3f2e3-51cc-4799-a0f4-6d4d988fd831",
    "dutchforeignaffairs-ice": "a9e32922-e45d-4ea0-88ec-3c3423ab3a16",
    "dme": "51cdc5ba-c05c-459b-b54f-14f18ac10542",
    "cordaid": "7acd4653-0614-4c11-ade7-a387fcff7aa3",
    "unicef": "5911d845-18b0-4321-bf27-4ce4535a735c",
    "amref": "7e4fb644-73dc-4fd5-b11d-dfdb963dd377",
    "gatesfoundation": "08d77ccf-6ffe-44b2-8079-93070547f181",
    "akvo": "d57f8fba-9dc4-46df-aa7e-0d414e39f026",
    "akvorsr": "e5e46d16-3715-44d7-97be-e1f16e244663",
    "programmes": "e5e46d16-3715-44d7-97be-e1f16e244663",
    "akvoasiahub": "52aae09d-6f87-4699-bf3b-07a080c76560",
    "aim": "8ccb4afd-97f1-4e29-8b24-d359df608cc0",
    "vanuatu": "5697c8b7-e984-4517-abdf-a97e8f484787",
    "rain": "af209ab9-c9d0-4a44-8dbb-a6fe8ac5035a",
    "connect4change": "47c4dc38-6cde-42ef-bfa6-0841134d21d3",
    "commonsites": "4be40e6c-ef07-4ebd-bb82-7e3ac7397217",
    "act": "d5194576-ce91-48e3-beb8-781c5c92ee96",
    "texttochange": "a7ec11fe-d94e-42d3-a225-4fa32b5c1148",
    "undp": "a419b82c-4ba9-42ff-8780-da2084a53198",
}


def update_piwik_ids(apps, schema_editor):
    """Set the Piwik IDs for all existing sites."""

    PartnerSite = apps.get_model("rsr", "PartnerSite")
    partner_sites = PartnerSite.objects.filter(hostname__in=PIWIK_IDS.keys())
    for site in partner_sites:
        site.piwik_id = PIWIK_IDS[site.hostname]
        site.save(update_fields=["piwik_id"])
        print(site.hostname, site.piwik_id)
    count = len(partner_sites)
    print(f"Updated Piwik IDs for {count} sites")


class Migration(migrations.Migration):

    dependencies = [
        ("rsr", "0174_organisation_enforce_program_projects"),
    ]

    operations = [
        migrations.RemoveField(model_name="partnersite", name="piwik_id",),
        migrations.AddField(
            model_name="partnersite",
            name="piwik_id",
            field=models.UUIDField(
                blank=True, default=None, null=True, verbose_name="Piwik analytics ID"
            ),
        ),
        migrations.RunPython(update_piwik_ids, reverse_code=lambda x, y: None),
    ]
