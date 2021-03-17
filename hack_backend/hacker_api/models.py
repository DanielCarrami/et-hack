from django.db import models

# Create your models here.

class Hacker(models.Model):
    first_name = models.CharField(null=True, max_length=255)
    last_name = models.CharField(null=True, max_length=255)
    program = models.CharField(null=True, max_length=255)
    age = models.PositiveIntegerField()
    professional = models.BooleanField(default=True)

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)