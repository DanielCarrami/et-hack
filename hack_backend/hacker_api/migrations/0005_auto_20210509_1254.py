# Generated by Django 3.1.7 on 2021-05-09 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hacker_api', '0004_auto_20210509_1244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='hacker2',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hacker2', to='hacker_api.hacker'),
        ),
        migrations.AlterField(
            model_name='team',
            name='hacker3',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hacker3', to='hacker_api.hacker'),
        ),
        migrations.AlterField(
            model_name='team',
            name='hacker4',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hacker4', to='hacker_api.hacker'),
        ),
        migrations.AlterField(
            model_name='team',
            name='hacker5',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hacker5', to='hacker_api.hacker'),
        ),
        migrations.AlterField(
            model_name='team',
            name='hackerM',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hackermaster', to='hacker_api.hacker'),
        ),
    ]