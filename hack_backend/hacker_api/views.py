from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response 

from .serializers import HackerSerializer
from .models import Hacker
# Create your views here.

class HackerViewSet(viewsets.ModelViewSet):
    queryset = Hacker.objects.all().order_by('first_name')
    serializer_class = HackerSerializer
