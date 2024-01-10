from rest_framework.response import Response
from rest_framework.decorators import api_view
# from django.http import HttpResponse, JsonResponse
from .models import Produtos
from .serializers import ProdutosSerializer

@api_view(['GET'])
def allproducts(request):
    produtos = Produtos.objects.all()
    serializer = ProdutosSerializer(produtos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def productID(request, id):
    try:
        produto = Produtos.objects.get(idProduto=id)
        serializer = ProdutosSerializer(produto)
        return Response(serializer.data)
    except:
        return Response({'error':'Produto não existe'}, status=404)

@api_view(['GET'])
def productsName(request,nomeproduto):
    try:
        produtos = Produtos.objects.filter(nomeProduto__icontains=nomeproduto)
        serializer = ProdutosSerializer(produtos, many=True)
        return Response(serializer.data)
    except:
        return Response({'error':'Produto não existe'}, status=404)
    
@api_view(['POST'])
def newProduct(request):
    serializer = ProdutosSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    else:
        return Response("Dado não é valido - erro {}".format(serializer.errors), status=400)

@api_view(['PATCH']) # Usado para atualizar parcialmente, mas pode ser colocado PUT e usar para atualizar completo
def updateProduct(request, id):
    try:
        product = Produtos.objects.get(idProduto=id)
    except Produtos.DoesNotExist:
        return Response({'error':'Produto não encontrado'}, status=404)
    
    serializer = ProdutosSerializer(product, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response("Produto atualizado - {}".format(str(serializer.data)), status=200)
    
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deleteProduct(request, id):
    try:
        product = Produtos.objects.get(idProduto=id)
    except Produtos.DoesNotExist:
        return Response({'error':'Produto não encontrado'}, status=404)
    
    product.delete()
    return Response({'message':'Produto deletado com sucesso'}, status=204)