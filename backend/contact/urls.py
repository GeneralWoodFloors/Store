from django.urls import path
from .views import ContactMessageCreateView, ContactMessageListView, ContactMessageUserListView, ContactMessageResponseView

urlpatterns = [
    path("create/", ContactMessageCreateView.as_view(), name="contact-create"),  # Send messages
    path("messages/", ContactMessageListView.as_view(), name="contact-list"),  # Admin endpoint to list messages
    path("messages/user/", ContactMessageUserListView.as_view(), name="contact-user"), # User endpoint to list their messages
    path("respond/<int:pk>/", ContactMessageResponseView.as_view(), name="contact-respond"),  # Admin endpoint to respond to messages
]
