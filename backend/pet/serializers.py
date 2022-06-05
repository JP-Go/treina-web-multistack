from rest_framework import serializers

from .models import Pet


class PetSerializer(serializers.ModelSerializer):
    # Classe Meta para configurar o serializador
    class Meta:
        model =  Pet # Classe do modelo serializado
        fields = ("id","name","history","photo_url")
