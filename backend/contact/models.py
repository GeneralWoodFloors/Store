from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ContactMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  # If user is logged in
    name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.TextField(blank=True, null=True)
    message = models.TextField()
    image = models.ImageField(upload_to='contact_images/', blank=True, null=True)  # Optional image
    created_at = models.DateTimeField(auto_now_add=True)
    response = models.TextField(blank=True, null=True)  # Admin response
    responded = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.name} - {'Responded' if self.responded else 'Pending'}"
