from django.db import models

# Create your models here.

class Recipes(models.Model):
    SALADS = 'SA'
    COCKTAILS = 'CO'
    PASTA = 'PA'
    CATEGORY = [

        (SALADS, 'Салаты'),
        (COCKTAILS, 'Коктейли'),
        (PASTA, 'Паста')
    ]
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=1024)
    time = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=2, choices=CATEGORY, default='SA')

    def __str__(self):
        return self.title