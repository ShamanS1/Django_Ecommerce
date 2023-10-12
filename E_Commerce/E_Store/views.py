from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth


# Create your views here.


def userlogin(request):
    return render(request,"user_login_registration.html")

def adminlogin(request):
    return render(request,"admin_login.html")
