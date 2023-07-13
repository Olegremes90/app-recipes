
from . import views
from rest_framework import routers
from .api import *
from django.urls import path, include




urlpatterns = [
  path('home', views.index),
  path('home/salads', views.index),
  path('home/cocktails', views.index),
  path('home/cocktails/<int:id>', views.index_detail),
  path('home/pasta', views.index),



]