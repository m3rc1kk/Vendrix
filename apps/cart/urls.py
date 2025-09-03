
from django.urls import path
from . import views

urlpatterns = [
    path('', views.CartItemCreateListView.as_view(), name='cart'),
    path('<int:pk>/', views.CartItemUpdateDestroyView.as_view(), name='cart-update-destroy'),
]
