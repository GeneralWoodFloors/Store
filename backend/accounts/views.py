from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all() #list of all object we will look at when creating a new one
  serializer_class = UserSerializer #tells wht dat is accepted to make user 
  permission_classes = [AllowAny] #who can call this; anyone will be able to