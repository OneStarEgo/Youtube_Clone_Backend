from django.urls import path, include
from comments import views


urlpatterns = [
    path('<str:video_id>/', views.video_comments),
    path('', views.user_comments)
]