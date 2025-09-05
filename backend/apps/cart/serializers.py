from rest_framework import serializers
from .models import CartItem
from apps.main.serializers import ProductSerializer
from ..main.models import Product


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), write_only=True, source='product'
    )

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_id', 'quantity', 'added_at']



    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['product_id'].queryset = self.context['request'].user.products.model.objects.all()