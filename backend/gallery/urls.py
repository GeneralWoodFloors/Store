from django.urls import path
from .views import GalleryView, SingleView, CreateGalleryView, UpdateGalleryView, DeleteGalleryView

urlpatterns = [
    path ('', GalleryView.as_view(), name='view-gallery'),
    path ('create/', CreateGalleryView.as_view(), name='create-image'),
    path ('<int:pk>/', SingleView.as_view(), name='image-detail'),
    path ('<int:pk>/update/', UpdateGalleryView.as_view(), name='update-image'), 
    path ('<int:pk>/delete/', DeleteGalleryView.as_view(), name='delete-image')
]

#<id> -> id 
#<int:pk> -> primary key 

#order in which the path is created matters