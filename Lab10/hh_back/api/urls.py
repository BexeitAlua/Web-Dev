from django.urls import path
from api.views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:pk>/', company_detail),
    path('companies/<int:company_id>/vacancies/', VacanciesByCompanyIDView.as_view(), name='company_vacancies'),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:pk>/', vacancy_detail),
    path('vacancies/top_ten/', TopVacanciesView.as_view(), name='top_ten_vacancies')
]