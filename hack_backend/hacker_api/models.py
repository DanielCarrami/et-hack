from django.db import models

# Create your models here.

class Hacker(models.Model):
    name = models.CharField(null=True, max_length=255)
    email = models.CharField(null=True, max_length=255)
    discord = models.CharField(null=True, max_length=255)
    phone = models.CharField(null=True, max_length=255, default="00000000")
    campus = models.CharField(null=True, max_length=255)
    code = models.CharField(null=True, max_length=255)
    program = models.CharField(null=True, max_length=255)
    semester = models.CharField(null=True, max_length=255)

    def __str__(self):
        return '%s' % (self.email)

class Team(models.Model):
    name = models.CharField(null=True, max_length=255)
    team_type = models.CharField(null=True, max_length=255)
    rank = models.CharField(null=True, max_length=255)
    status = models.BooleanField(null=True, default=False)
    hackerM = models.OneToOneField(Hacker, on_delete=models.CASCADE, related_name="hackermaster")
    hacker2 = models.OneToOneField(Hacker, on_delete=models.CASCADE, related_name="hacker2")
    hacker3 = models.OneToOneField(Hacker, on_delete=models.CASCADE, related_name="hacker3")
    hacker4 = models.OneToOneField(Hacker, on_delete=models.CASCADE, related_name="hacker4")
    hacker5 = models.OneToOneField(Hacker, on_delete=models.CASCADE, related_name="hacker5")

    def __str__(self):
        return '%s' % (self.name)
