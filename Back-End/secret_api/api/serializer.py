from .models import User, PickedNames, UnpickedNames
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password', 'date']


class PickedNamesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PickedNames
        fields = ['id', 'name']


class UnpickedNamesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UnpickedNames
        fields = ['id', 'names']
