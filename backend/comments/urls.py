from django.urls import path, include
from comments import views



urlpatterns = [
    path('all_comments/', views.get_all_comments),
    path('', views.user_comments),
]