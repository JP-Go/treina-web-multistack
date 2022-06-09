from django.core.mail import send_mail
from .models import Adoption

def send_confimation_mail(adocao: Adoption):
    subject = "Adoção realizada com sucesso"
    content = f"Parabéns! O pet {adocao.pet.name} foi adotado com sucesso\n Valor doado: {adocao.donation}"
    sender = "testmailer122021@gmail.com"
    recipients = [adocao.email]
    send_mail(subject, content, sender, recipients)
