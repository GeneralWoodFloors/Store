from django.urls import path
from .views import ContactMessageCreateView, ContactMessageListView, ContactMessageResponseView

urlpatterns = [
    path("create/", ContactMessageCreateView.as_view(), name="contact-create"),  # Send messages
    path("messages/", ContactMessageListView.as_view(), name="contact-list"),  # Admin endpoint to list messages
    path("respond/<int:pk>/", ContactMessageResponseView.as_view(), name="contact-respond"),  # Admin endpoint to respond to messages
]
