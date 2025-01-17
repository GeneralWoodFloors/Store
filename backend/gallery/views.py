from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Gallery
from .serializers import GallerySerializers

# Create your views here.

class GalleryView(generics.ListAPIView):
  queryset = Gallery.objects.all()
  serializer_class = GallerySerializers
  permission_classes = [AllowAny] #anyone is allowed to view

class SingleView(generics.RetrieveAPIView):
  queryset = Gallery.objects.all()
  serializer_class = GallerySerializers
  permission_classes = [AllowAny] 

class CreateGalleryView(generics.CreateAPIView):
  queryset = Gallery.objects.all()
  serializer_class = GallerySerializers
  permission_classes = [IsAdminUser] #only admin is allowed to

class UpdateGalleryView(generics.UpdateAPIView):
  queryset = Gallery.objects.all()
  serializer_class = GallerySerializers
  permission_classes = [IsAdminUser] #only admin is allowed to 

class DeleteGalleryView(generics.DestroyAPIView):
  queryset = Gallery.objects.all()
  serializer_class = GallerySerializers
  permission_classes = [IsAdminUser] #only admin is allowed to