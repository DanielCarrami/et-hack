from django.contrib import admin
from django.core.mail import send_mail

from .models import Team, Hacker
# Register your models here.

def send_email(modeladmin, request, queryset):
    queryset.update(status=True)
    email_list = queryset.values_list('hackerM__email', flat=True)
    print(email_list)
    for email in email_list:
        send_mail(
           'Confirmación de registro Et-Hack',
            'Este mensaje es una prueba',
            'Et-Hack',
            [email],
            fail_silently=False
        )

class TeamAdmin(admin.ModelAdmin):
    list_display=['name', 'team_type', 'rank', 'status', 'hackerM']
    ordering = ['name']
    actions=[send_email]

admin.site.register(Hacker)
admin.site.register(Team, TeamAdmin)
