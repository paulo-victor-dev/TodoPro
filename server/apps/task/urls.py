from django.urls import path

from .views import TaskListCreateView, TaskRetrieveUpdateDestroyView

urlpatterns = [
    path('task/', TaskListCreateView.as_view()),
    path('task/<int:pk>/', TaskRetrieveUpdateDestroyView.as_view())
]