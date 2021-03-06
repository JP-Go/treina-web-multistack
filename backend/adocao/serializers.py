from rest_framework import serializers
from .models import Adoption
from pet.serializers import PetSerializer
from pet.models import Pet


class AdoptionSerializer(serializers.ModelSerializer):
    pet = PetSerializer(many=False, read_only=True)
    pet_id = serializers.PrimaryKeyRelatedField(
        many=False, write_only=True, queryset=Pet.objects.all()
    )

    class Meta:
        model = Adoption
        fields = ("id", "email", "donation", "pet", "pet_id")

    def create(self, validated_data):
        # Pega o id passado no campo 'pet_id' e passa para o campo 'pet'
        validated_data["pet"] = validated_data.pop("pet_id")
        return super().create(validated_data)

    def validate_valor(self, value):
        if not 10 < value < 100:
            raise serializers.ValidationError("Valor deve ser entre 10 e 100")
        return value
