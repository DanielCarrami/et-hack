from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response 

from .serializers import HackerSerializer, TeamSerializer
from .models import Hacker, Team
# Create your views here.

class HackerViewSet(viewsets.ModelViewSet):
    queryset = Hacker.objects.all().order_by('name')
    serializer_class = HackerSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('name')
    serializer_class = TeamSerializer