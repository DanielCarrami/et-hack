from django.urls import path, include
from rest_framework import routers
from . import views 

router = routers.DefaultRouter()
router.register(r'team', views.TeamViewSet, basename='teams')

urlpatterns = [
    path('', include(router.urls)),
    path('sendmail/', views.sendmail, name="sendmail")
]
