import { Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { HomeComponent } from './home/home.component';
import { VacanciesListComponent } from './vacancies-list/vacancies-list.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},
    { path: 'companies', component: CompaniesListComponent },
    { path: 'companies/:id', component: CompanyComponent},
    {path: 'vacancies/:id', component: VacancyComponent},
    {path: 'home', component: HomeComponent},
    {path:'vacancies', component:VacanciesListComponent},
];
