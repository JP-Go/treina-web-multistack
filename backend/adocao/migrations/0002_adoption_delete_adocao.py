# Generated by Django 4.0.5 on 2022-06-08 11:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("pet", "0002_rename_photourl_pet_photo_url"),
        ("adocao", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Adoption",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("donation", models.DecimalField(decimal_places=2, max_digits=5)),
                ("email", models.EmailField(max_length=255)),
                (
                    "pet",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="pet.pet"
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="Adocao",
        ),
    ]
