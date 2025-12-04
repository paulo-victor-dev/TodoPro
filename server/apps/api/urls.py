from django.urls import path, include

urlpatterns = [
    # Apps urls
    path('api/v1/', include('apps.task.urls')),
]