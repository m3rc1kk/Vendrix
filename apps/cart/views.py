from django.shortcuts import render
from rest_framework import generics, permissions
from .models import CartItem
from rest_framework.exceptions import ValidationError

from .serializers import CartItemSerializer


class CartItemCreateListView(generics.ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        product = serializer.validated_data['product']
        quantity = serializer.validated_data.get('quantity', 1)


        cart_item, created = CartItem.objects.get_or_create(
            user=self.request.user,
            product=product,
            defaults={'quantity': quantity}
        )

        if not created:
            cart_item.quantity += quantity
            cart_item.save()

        serializer.instance = cart_item
        return cart_item

class CartItemUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

