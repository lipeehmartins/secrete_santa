from django.contrib import admin
from .models import User, PickedNames, UnpickedNames

admin.site.register(User)
admin.site.register(PickedNames)
admin.site.register(UnpickedNames)
