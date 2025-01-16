from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CreateUserView

urlpatterns = [
  path('register/', CreateUserView.as_view(), name='register'),
  path('login/', TokenObtainPairView.as_view(), name="get_token"),
  path('login/refresh', TokenRefreshView.as_view(), name="token_refresh"),
]