from rest_framework import serializers
from .models import Produtos

# Cria modelo para ser retornado como json na view
class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = '__all__'