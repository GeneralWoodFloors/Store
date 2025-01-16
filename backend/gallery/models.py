from django.db import models

# Create your models here.

class Gallery(models.Model):
  image = models.ImageField(upload_to='gallery/')
  title = models.CharField(max_length=100)
  description = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title