from django.contrib import admin
from .models import Gallery

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')  # Columns to display
    search_fields = ('title', 'description')     # Fields to search