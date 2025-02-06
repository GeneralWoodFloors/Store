from django.contrib import admin
from .models import ContactMessage

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at", "responded")
    list_filter = ("responded", "created_at")
    search_fields = ("name", "email", "message")

admin.site.register(ContactMessage, ContactMessageAdmin)
