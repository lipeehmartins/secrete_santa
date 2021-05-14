from django.urls import path, include
from .views import UserViewSet, PickedNamesViewSet, UnpickedNamesViewSet
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views

routers = DefaultRouter()
routers.register('user', UserViewSet, basename='user')
routers.register('pickedName', PickedNamesViewSet, basename='pickedName')
routers.register('unpickedName', UnpickedNamesViewSet, basename='unpickedName')

urlpatterns = [
    path('viewset/', include(routers.urls)),
    path('viewset/<int:pk>/', include(routers.urls)),
    path('users/', UserViewSet),
    path('pickedNames/', PickedNamesViewSet),
    path('unpickedNames/', UnpickedNamesViewSet),
    path('login/', views.obtain_auth_token),
]