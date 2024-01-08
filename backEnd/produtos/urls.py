from django.urls import path
from . import views

urlpatterns = [
    # GET
    path('produtos/', views.allproducts, name='all-products'),
    path('produto/<int:id>', views.productID, name='product-id'),
    path('produtos/consulta/<str:nomeproduto>', views.productsName, name='products-filter'),
    #POST
    path('novoproduto/', views.newProduct, name='new-product')
]
