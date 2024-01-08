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

    
