from django.urls import path
from .controllers import controllers

urlpatterns = [
    path('produtos/', controllers.allproducts)
]
