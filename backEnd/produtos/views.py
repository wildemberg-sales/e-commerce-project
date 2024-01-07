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