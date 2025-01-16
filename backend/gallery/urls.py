from django.urls import path
from .views import GalleryView, SingleView, CreateGalleryView, UpdateGalleryView, DeleteGalleryView

urlpatterns = [
    path ('', GalleryView.as_view(), name='view-gallery'),
    path ('<id>/', SingleView.as_view(), name='image-detail'),
    path ('create/', CreateGalleryView.as_view(), name='create-image'),
    path ('<id>/update/', UpdateGalleryView.as_view(), name='update-image'), 
    path ('<id>/delete/', DeleteGalleryView.as_view(), name='delete-image')
]

#<id> -> id 
#<int:pk> -> primary key 