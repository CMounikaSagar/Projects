from django.db import models

# Create your models here.
class Student(models.Model):
    s_name = models.CharField(max_length=200,null=True,unique=False)
    s_roll_no = models.IntegerField(default=0)
    s_address = models.CharField(max_length=200)
    