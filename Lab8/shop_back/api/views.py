from django.forms import model_to_dict
from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    data = {'product': model_to_dict(product)}
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    data = {'category': model_to_dict(category)}
    return JsonResponse(data)


def products_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    products = Product.objects.filter(category=category)
    data = {'products': list(products.values())}
    return JsonResponse(data)