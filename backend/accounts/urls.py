from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CreateUserView, ProfileUserView, LogoutView #ProfileUsersView

urlpatterns = [
  path('register/', CreateUserView.as_view(), name='register'),
  path('login/', TokenObtainPairView.as_view(), name="get_token"),
  path('login/refresh', TokenRefreshView.as_view(), name="token_refresh"),
  #path('users/', ProfileUsersView.as_view(), name='users-profile'),
  path('user/', ProfileUserView.as_view(), name='user-profile'),
  path('user/logout/', LogoutView.as_view(), name='logout')
]