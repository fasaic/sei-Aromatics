# Generated by Django 4.1.1 on 2022-09-10 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('remedies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='remedy',
            name='icon',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
