from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import *

urlpatterns = [
    # Token urls
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Auth urls
    path('user/info/', UserRetrieveAPIView.as_view(), name='user-info'),
    path('user/register/', UserCreateAPIView.as_view(), name='user-register'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout')
]