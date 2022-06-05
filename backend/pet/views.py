"""
 Padrão: Mais de um retorno -> class (Model)List = Lista de dados do tipo (Model)
 Um retorno -> (Model)Tail = *um* dado  do tipo (Model)
"""
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK
from .models import Pet
from .serializers import PetSerializer


""" Cada verbo HTTP que eu quero que a classe implemente deve ser definido como
um método da classe
"""

class PetList(APIView):
    def get(self, request,format=None):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets,many=True)
        return Response(serializer.data,status=HTTP_200_OK)
