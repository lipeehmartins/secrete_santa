from django.contrib import admin
from .models import PickedNames, UnpickedNames

admin.site.register(PickedNames)
admin.site.register(UnpickedNames)
