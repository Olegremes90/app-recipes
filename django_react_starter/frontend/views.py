from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Recipes


from .serializers import RecipesListSerializer
from . import models

# Create your views here.
def index(request):
    return render(request,  "frontend/index.html")

def index_detail(request, id):
    context={}
    context['data']= Recipes.objects.get(id=id)
    return render(request,  "frontend/index.html", context)



class RecipesListViewSet(ModelViewSet):
    serializer_class = RecipesListSerializer
    queryset = Recipes.objects.all()
    permission_classes = [IsAuthenticated, ]