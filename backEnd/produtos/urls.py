from django.urls import path
from . import views

urlpatterns = [
    path('produtos/', views.allproducts, name='all-products'),
    path('produto/<int:id>', views.productID, name='product-id'),
    path('produtos/consulta/<str:nomeproduto>', views.productsName, name='products-filter')
]
