from rest_framework import serializers
from . import models

class RecipesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Recipes
        fields = ('id', 'title', 'description', 'category')