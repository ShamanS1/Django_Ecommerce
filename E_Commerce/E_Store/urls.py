from django.urls import path
from . import views

urlpatterns = [
    path('', views.userlogin, name='userlogin'),
    path('adminlogin', views.adminlogin, name='adminlogin'),
    path('user_login_registration', views.userlogin, name='user_login_registration'),
    path('userdata', views.userdatatable, name='userdata'),
]
