# Generated by Django 3.1.7 on 2021-05-09 17:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hacker_api', '0003_team_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='hacker2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hacker2', to='hacker_api.hacker', unique=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='hacker3',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hacker3', to='hacker_api.hacker', unique=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='hacker4',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hacker4', to='hacker_api.hacker', unique=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='hacker5',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hacker5', to='hacker_api.hacker', unique=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='hackerM',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hackermaster', to='hacker_api.hacker', unique=True),
        ),
    ]