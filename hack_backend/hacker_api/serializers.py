from .models import Hacker
from rest_framework import serializers

class HackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hacker 
        fields = "__all__"