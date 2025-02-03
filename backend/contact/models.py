from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ContactMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  # If user is logged in
    name = models.CharField(max_length=255)  # Sender's name
    email = models.EmailField()  # Contact email (required)
    address = models.TextField(blank=True, null=True)  # Optional address field
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # Optional phone number
    message = models.TextField()  # Message content
    image = models.ImageField(upload_to='contact_images/', blank=True, null=True)  # Optional image attachment
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp of message creation
    response = models.TextField(blank=True, null=True)  # Admin response (if any)
    responded = models.BooleanField(default=False)  # Status flag to track responses

    def __str__(self):
        return f"Message from {self.name} - {'Responded' if self.responded else 'Pending'}"
