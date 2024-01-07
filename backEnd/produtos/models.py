from django.db import models

class Produtos(models.Model):
    idProduto = models.AutoField(primary_key=True)
    nomeProduto = models.CharField(max_length=255)
    descricaoProduto = models.TextField()
    preçoProduto = models.DecimalField(max_digits=9, decimal_places=2)
    urlImagem = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    
    def __str__(self): # para ajustar o nome que aparece no admin
        return "ID: {} - Nome: {}".format(self.idProduto, self.nomeProduto)