from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied

from .models import Product
from .serializers import ProductImageSerializer, ProductSerializer
from apps.main.permissions import IsSeller


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            permission_classes = [permissions.IsAuthenticated, IsSeller]
        else:
            permission_classes = [permissions.AllowAny, ]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'

    def perform_update(self, serializer):
        if self.get_object().seller != self.request.user:
            raise PermissionDenied("You cannot edit someone else's product.")
        serializer.save()

    def perform_destroy(self, instance):
        if instance.seller != self.request.user:
            raise PermissionDenied("You cannot delete someone else's product.")
        instance.delete()

class ProductImageUploadView(generics.CreateAPIView):
    serializer_class = ProductImageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        slug = self.kwargs['slug']
        product = Product.objects.get(slug=slug)

        if product.seller != self.request.user:
            return PermissionDenied("You cannot upload someone else's product.")

        serializer.save(product=product)