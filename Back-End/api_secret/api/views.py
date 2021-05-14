from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import User, PickedNames, UnpickedNames
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from .serializer import UserSerializer, PickedNamesSerializer, UnpickedNamesSerializer
from django.shortcuts import get_object_or_404


class UserViewSet(viewsets.ViewSet):

    def list(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
        authentications_classes = [SessionAuthentication, BasicAuthentication]
        authentication_classes = [TokenAuthentication]
        permission_classes = [IsAuthenticated]

    def create(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        users = user.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PickedNamesViewSet(viewsets.ViewSet):

    def list(self, request):
        pickedNames = PickedNames.objects.all()
        serializer = PickedNamesSerializer(pickedNames, many=True)
        return Response(serializer.data)
        authentications_classes = [SessionAuthentication, BasicAuthentication]
        #authentication_classes = [TokenAuthentication]
        permission_classes = [IsAuthenticated]

    def create(self, request):
        serializer = PickedNamesSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = PickedNames.objects.all()
        pickedName = get_object_or_404(queryset, pk=pk)
        serializer = PickedNamesSerializer(pickedName)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pickedNames = pickedName.objects.get(pk=pk)
        serializer = PickedNamesSerializer(pickedName, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UnpickedNamesViewSet(viewsets.ViewSet):

    def list(self, request):
        unpickedNames = UnpickedNames.objects.all()
        serializer = UnpickedNamesSerializer(unpickedNames, many=True)
        return Response(serializer.data)
        authentications_classes = [SessionAuthentication, BasicAuthentication]
        #authentication_classes = [TokenAuthentication]
        permission_classes = [IsAuthenticated]

    def create(self, request):
        serializer = UnpickedNamesSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = UnpickedNames.objects.all()
        unpickedName = get_object_or_404(queryset, pk=pk)
        serializer = UnpickedNamesSerializer(unpickedName)
        return Response(serializer.data)

    def update(self, request, pk=None):
        unpickedNames = unpickedName.objects.get(pk=pk)
        serializer = UnpickedNamesSerializer(unpickedName, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentications_classes = [SessionAuthentication, BasicAuthentication]
    #uthentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class PickedNamesViewSet(viewsets.ModelViewSet):
    queryset = PickedNames.objects.all()
    serializer_class = PickedNamesSerializer
    authentications_classes = [SessionAuthentication, BasicAuthentication]
    #authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class UnpickedNamesViewSet(viewsets.ModelViewSet):
    queryset = UnpickedNames.objects.all()
    serializer_class = UnpickedNamesSerializer
    authentications_classes = [SessionAuthentication, BasicAuthentication]
    #authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
