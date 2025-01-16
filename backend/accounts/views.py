from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model

# Create your views here.

class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all() #list of all object we will look at when creating a new one
  serializer_class = UserSerializer #tells wht dat is accepted to make user 
  permission_classes = [AllowAny] #who can call this; anyone will be able to

#class ProfileUsersView(generics.ListAPIView): # list all of the users -> this is a test
  #permission_classes = [IsAuthenticated]

  #queryset = User.objects.all()
  #serializer_class = UserSerializer

User = get_user_model()

class ProfileUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Return the authenticated user's profile
        return self.request.user
    
class LogoutView(APIView): #temporary -> for demo purposes -> future should be using generics.DestroyAPIView
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return Response({"message": "You have been logged out."}, status=200)
