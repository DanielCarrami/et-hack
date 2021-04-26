from .models import Hacker, Team
from rest_framework import serializers

class HackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hacker 
        fields = "__all__"  

class TeamSerializer(serializers.ModelSerializer):
    hackerM = HackerSerializer(many=False, read_only=False)
    hacker2 = HackerSerializer(many=False, read_only=False)
    hacker3 = HackerSerializer(many=False, read_only=False)
    hacker4 = HackerSerializer(many=False, read_only=False)
    hacker5 = HackerSerializer(many=False, read_only=False)
    class Meta:
        model = Team 
        depth = 1
        fields = "__all__"

    def create(self, validated_data):
        hackerM_data = validated_data.pop('hackerM')
        hacker2_data = validated_data.pop('hacker2')
        hacker3_data = validated_data.pop('hacker3')
        hacker4_data = validated_data.pop('hacker4')
        hacker5_data = validated_data.pop('hacker5')
        hackerM = Hacker.objects.create(**hackerM_data)
        hacker2 = Hacker.objects.create(**hacker2_data)
        hacker3 = Hacker.objects.create(**hacker3_data)
        hacker4 = Hacker.objects.create(**hacker4_data)
        hacker5 = Hacker.objects.create(**hacker5_data)
        team = Team.objects.create(hackerM=hackerM,hacker2=hacker2,hacker3=hacker3,hacker4=hacker4,hacker5=hacker5, **validated_data)
        return team