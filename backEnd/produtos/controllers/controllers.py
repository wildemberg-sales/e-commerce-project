from django.http import HttpResponse

def allproducts(request):
    return  HttpResponse('Todos os produtos')