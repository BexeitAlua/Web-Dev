from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', get_company_by_id),
    path('companies/<int:id>/vacancies/', get_vacancies_by_company_id),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', get_vacancy_by_id),
    path('vacancies/top_ten/', top_vacancies)
]