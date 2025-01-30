from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    email = models.EmailField()
    event_uri = models.CharField(max_length=255)
    event_id = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking for {self.email} - {self.event_uri}"
