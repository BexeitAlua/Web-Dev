from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy
import json

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [p.to_json() for p in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company(name=data.get('name', ''), description=data.get('description', ''),city=data.get('city', ''),address=data.get('address', ''))
        company.save()
        return JsonResponse(company.to_json())

@csrf_exempt
def get_company_by_id(request, id):
    if request.method == 'GET':
        try:
            company = Company.objects.get(id=id)
            return JsonResponse(company.to_json(), safe=False)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
    elif request.method == 'PUT':
        try:
            company = Company.objects.get(id=id)
            data = json.loads(request.body)
            company.name = data.get('name', company.name)
            company.description = data.get('description', company.description)
            company.save()
            return JsonResponse(company.to_json())
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
    elif request.method == 'DELETE':
        try:
            company = Company.objects.get(id=id)
            company.delete()
            return JsonResponse({'deleted': True})
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
    else:
        return HttpResponseBadRequest()

@csrf_exempt
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [p.to_json() for p in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        vacancy = Vacancy(name= data.get('name',''),description= data.get('description',''),salary= data.get('salary',''),company= data.get('company',''))
        vacancy.save()
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def get_vacancy_by_id(request, id):
    if request.method == 'GET':
        try:
            vacancy = Vacancy.objects.get(id=id)
            return JsonResponse(vacancy.to_json(), safe=False)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)
    elif request.method == 'PUT':
        try:
            vacancy = Vacancy.objects.get(id=id)
            data = json.loads(request.body)
            vacancy.title = data.get('title', vacancy.title)
            vacancy.description = data.get('description', vacancy.description)
            vacancy.salary = data.get('salary', vacancy.salary)
            vacancy.save()
            return JsonResponse(vacancy.to_json())
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)
    elif request.method == 'DELETE':
        try:
            vacancy = Vacancy.objects.get(id=id)
            vacancy.delete()
            return JsonResponse({'deleted': True})
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)
    else:
        return HttpResponseBadRequest()

@csrf_exempt
def top_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_json = [p.to_json() for p in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    else:
        return HttpResponseBadRequest()

def get_vacancies_by_company_id(request, id):
    company_name = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company_name)
    vacancies_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_json, safe=False)
