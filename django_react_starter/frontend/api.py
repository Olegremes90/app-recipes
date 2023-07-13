from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Recipes

from .serializers import RecipesListSerializer
from . import models


class RecipesListViewSet(ModelViewSet):
    serializer_class = RecipesListSerializer
    queryset = Recipes.objects.all()
    permission_classes = [IsAuthenticated, ]


