from django.contrib import admin
from django.core.mail import send_mail
from import_export.admin import ImportExportModelAdmin
from import_export import fields, resources
from import_export.widgets import ForeignKeyWidget
from .models import Team, Hacker
import csv
from django.http import HttpResponse
# Register your models here.

def send_email(modeladmin, request, queryset):
    queryset.update(status=True)
    email_list = queryset.values_list('hackerM__email', flat=True)
    for email in email_list:
        send_mail(
           'Confirmación de registro Et-Hack',
            'Este mensaje es una prueba',
            'Et-Hack',
            [email],
            fail_silently=False
        )

class TeamInLine(admin.TabularInline):
    model = Team

class HackerAdmin(admin.ModelAdmin):
    list_display=['name', 'email', 'discord', 'phone', 'campus', 'code', 'program', 'semester']

class HackerInLine(admin.TabularInline):
    model = Hacker

class HackerResources(resources.ModelResource):
    pass
class TeamAdmin( ImportExportModelAdmin, admin.ModelAdmin):
    list_display=[
        'name', 'team_type', 'rank', 'status', 
        'hackerM_name', 'hackerM', 'hackerM_phone', 'hackerM_discord', 'hackerM_campus', 'hackerM_code', 'hackerM_program', 'hackerM_semester',
        'hacker2_name', 'hacker2', 'hacker2_discord', 'hacker2_campus', 'hacker2_code', 'hacker2_program', 'hacker2_semester',
        'hacker3_name', 'hacker3', 'hacker3_discord', 'hacker3_campus', 'hacker3_code', 'hacker3_program', 'hacker3_semester', 
        'hacker4_name', 'hacker4', 'hacker4_discord', 'hacker4_campus', 'hacker4_code', 'hacker4_program', 'hacker4_semester',
        'hacker5_name', 'hacker5', 'hacker5_discord', 'hacker5_campus', 'hacker5_code', 'hacker5_program', 'hacker5_semester',]
    ordering = ['name']
    actions=[send_email, "export_as_csv"]

    def export_as_csv(self, request, queryset):
        meta = self.model._meta
        # field_names = [field.name for field in meta.fields]
        field_names = list(self.list_display)

        response = HttpResponse(content_type="text/csv")
        response["Content-Disposition"] = "attachment; filename={}.csv".format(meta)
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            result = []
            for field in field_names:
                attr = getattr(obj, field, None)
                if attr and callable(attr):
                    result.append(attr())
                elif attr:
                    result.append(attr)
                else:
                    attr = getattr(self, field, None)
                    if attr:
                        result.append(attr(obj))
                    else:
                        result.append(attr)
            row = writer.writerow(result)

        return response

    export_as_csv.short_description = "Export Selected"

    def hackerM_name(self, obj):
        return obj.hackerM.name

    def hackerM_phone(self, obj):
        return obj.hackerM.phone

    def hackerM_discord(self, obj):
        return obj.hackerM.discord

    def hackerM_campus(self, obj):
        return obj.hackerM.campus

    def hackerM_code(self, obj):
        return obj.hackerM.code
    
    def hackerM_program(self, obj):
        return obj.hackerM.program

    def hackerM_semester(self, obj):
        return obj.hackerM.semester

    #HACKER 2
    def hacker2_name(self, obj):
        return obj.hacker2.name

    def hacker2_discord(self, obj):
        return obj.hacker2.discord

    def hacker2_campus(self, obj):
        return obj.hacker2.campus

    def hacker2_code(self, obj):
        return obj.hacker2.code
    
    def hacker2_program(self, obj):
        return obj.hacker2.program

    def hacker2_semester(self, obj):
        return obj.hacker2.semester

    #HACKER 3
    def hacker3_name(self, obj):
        return obj.hacker3.name

    def hacker3_discord(self, obj):
        return obj.hacker3.discord

    def hacker3_campus(self, obj):
        return obj.hacker3.campus

    def hacker3_code(self, obj):
        return obj.hacker3.code
    
    def hacker3_program(self, obj):
        return obj.hacker3.program

    def hacker3_semester(self, obj):
        return obj.hacker3.semester
    
    #HACKER 4
    def hacker4_name(self, obj):
        return obj.hacker4.name

    def hacker4_discord(self, obj):
        return obj.hacker4.discord

    def hacker4_campus(self, obj):
        return obj.hacker4.campus

    def hacker4_code(self, obj):
        return obj.hacker4.code
    
    def hacker4_program(self, obj):
        return obj.hacker4.program

    def hacker4_semester(self, obj):
        return obj.hacker4.semester

    #HACKER 5
    def hacker5_name(self, obj):
        return obj.hacker5.name

    def hacker5_discord(self, obj):
        return obj.hacker5.discord

    def hacker5_campus(self, obj):
        return obj.hacker5.campus

    def hacker5_code(self, obj):
        return obj.hacker5.code
    
    def hacker5_program(self, obj):
        return obj.hacker5.program

    def hacker5_semester(self, obj):
        return obj.hacker5.semester



admin.site.register(Hacker, HackerAdmin)
admin.site.register(Team, TeamAdmin)
