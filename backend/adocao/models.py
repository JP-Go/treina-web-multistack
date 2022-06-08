from django.db import models


class Adoption(models.Model):
    donation = models.DecimalField(
        null=False, blank=False, max_digits=5, decimal_places=2
    )
    email = models.EmailField(null=False, blank=False, max_length=255)
    pet = models.ForeignKey(
        to="pet.Pet", null=False, blank=False, on_delete=models.CASCADE
    )
