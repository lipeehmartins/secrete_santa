from django.db import models


# class User(models.Model):
#     username = models.CharField(max_length=100)
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     email = models.EmailField(max_length=100)
#     date = models.DateField(auto_now_add=True)
#     password = models.CharField(max_length=100)

#     def __str__(self):
#         return self.username


class PickedNames(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class UnpickedNames(models.Model):
    names = models.CharField(max_length=100)
    pickedName = models.BooleanField(blank=True, default=False)

    def __str__(self):
        return self.names
