from django.urls import path
from . import views

urlpatterns = [
    # GET
    path('produtos/', views.allproducts, name='all-products'),
    path('produto/<int:id>', views.productID, name='product-id'),
    path('produtos/consulta/<str:nomeproduto>', views.productsName, name='products-filter'),
    #POST
    path('produto/novoproduto/', views.newProduct, name='new-product'),
    # PATCH
    path('produto/atualizar/<int:id>', views.updateProduct, name='update-product'),
    # DELETE
    path('produto/deletar/<int:id>', views.deleteProduct, name='delete-product')
]
