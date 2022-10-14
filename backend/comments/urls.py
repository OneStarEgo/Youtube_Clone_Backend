from django.urls import path, include
from comments import views


urlpatterns = [
    path('', views.user_comments)
]