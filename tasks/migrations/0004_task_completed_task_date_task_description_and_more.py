# Generated by Django 4.2.1 on 2023-06-03 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0003_remove_task_completed_remove_task_date_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="task",
            name="completed",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="task", name="date", field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name="task",
            name="description",
            field=models.CharField(default=None, max_length=500),
        ),
        migrations.AddField(
            model_name="task",
            name="project",
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AddField(
            model_name="task", name="starred", field=models.BooleanField(default=False),
        ),
    ]