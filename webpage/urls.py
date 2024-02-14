from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("clases", views.clases, name="clases"),  
    path("clases/<str:categorie>", views.clase, name="clase"),  
    path("tienda", views.tienda, name="tienda"),
    path("eventos", views.eventos, name="eventos")
]