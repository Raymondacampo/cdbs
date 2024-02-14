from django.contrib import admin
from .models import User, categoriaClases, categoriaProductos, Clase, producto, marcaProducto, talla, ventas, Color

admin.site.register(User)
admin.site.register(categoriaClases)
admin.site.register(categoriaProductos)
admin.site.register(Clase)
admin.site.register(producto)
admin.site.register(marcaProducto)
admin.site.register(talla)
admin.site.register(ventas)
admin.site.register(Color)