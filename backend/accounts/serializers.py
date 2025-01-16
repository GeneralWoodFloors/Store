from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User 
    fields = ['id', 'username', 'password','email', 'borough', 'phone_number']
    extra_kwargs = {"password": {"write_only": True}} # Ensures password is only writable, not readable

  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user