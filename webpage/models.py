from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    pass

class categoriaClases(models.Model):
    categoria = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.categoria}'

class categoriaProductos(models.Model):
    categoria = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.categoria}'
    
class marcaProducto(models.Model):
    marca = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.marca}'

class Clase(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=300, null=True)
    categoria = models.ForeignKey(categoriaClases, on_delete=models.SET_NULL, null=True, related_name="clases")
    precio = models.IntegerField()
    horario = models.CharField(max_length=100)
    edades = models.CharField(max_length=20)
    maestro = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.nombre}'
    
    
class talla(models.Model):
    talla = models.IntegerField()

    def __str__(self):
        return f'{self.talla}'

class Color(models.Model):
    color = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.color}'

class producto(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=300, null=True, blank=True)
    marca = models.ForeignKey(marcaProducto, on_delete=models.SET_NULL, blank=True, null=True, related_name='productos')
    categoria = models.ForeignKey(categoriaProductos, on_delete=models.SET_NULL, null=True, related_name="productos")
    color = models.ManyToManyField(Color, related_name='productos')
    precio = models.IntegerField(null=True, blank=True)
    talla = models.ManyToManyField(talla, blank=True, related_name='producto')

    def __str__(self):
        return f'{self.nombre}'

class ventas(models.Model):
    comprador = models.ForeignKey(User, on_delete = models.SET_NULL, null=True, related_name="compras")
    producto = models.ManyToManyField(producto, related_name="ventas")