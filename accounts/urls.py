"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import createUserView, Homepage, loginUserView, user_logout, userInfo
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("signup/",Homepage.as_view(), name='signup'),
    path('signup', Homepage.as_view(), name='signup_noslash'),
    path('', Homepage.as_view(), name='home'),
    path("login/",Homepage.as_view(), name='login'),
    path('login', Homepage.as_view(), name='login'),
    path('user-Info/', userInfo.as_view(), name='user-info'),
    path('createuser/', createUserView, name='createuser'),
    path('authuser/', loginUserView, name='authuser'),  
    path('logout/',user_logout, name='logout'),

    

    

]+ static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])