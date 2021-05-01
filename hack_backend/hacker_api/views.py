from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response 
from django.core.mail import send_mail
from django.contrib import messages
from .serializers import HackerSerializer, TeamSerializer
from .models import Hacker, Team
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class HackerViewSet(viewsets.ModelViewSet):
    queryset = Hacker.objects.all().order_by('name')
    serializer_class = HackerSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('name')
    serializer_class = TeamSerializer

@csrf_exempt
def sendmail(request):
    if request.method == "POST":
        print(request.POST)
        message_name = request.POST['message_name']
        message_email = request.POST['message_email']
        message_content = request.POST['message']

        mail = send_mail(
            message_name,
            message_content + "\nEnviado por: " + message_name + "\nCorreo de respuesta: " + message_email,
            message_email,
            ['cej.pue@gmail.com']
        )

        if mail:
            messages.success(request, 'Email has been sent')
            return HttpResponse('Mail successfully sent')
        else:
            return HttpResponse('Message not sent')
    else:
        return HttpResponse('Not Found F')