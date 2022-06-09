from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from .email_service import send_confimation_mail
from .serializers import AdoptionSerializer
from .models import Adoption


class AdoptionList(APIView):
    
    def get(self,request,format=None):
        adoptions = Adoption.objects.all()
        serializer = AdoptionSerializer(adoptions, many = True)
        return Response(serializer.data,status=HTTP_200_OK)


    def post(self, request, format=None):
        serializer = AdoptionSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"errors": serializer.errors, "message": "Houve um erro de validação"},
                status=HTTP_400_BAD_REQUEST,
            )
        adocao = serializer.save()
        send_confimation_mail(adocao)
        return Response(serializer.data, status=HTTP_201_CREATED)
