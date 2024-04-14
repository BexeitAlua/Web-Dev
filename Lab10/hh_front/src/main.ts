import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { CompaniesListComponent } from './app/companies-list/companies-list.component';
import { VacanciesListComponent } from './app/vacancies-list/vacancies-list.component';
import { VacancyComponent } from './app/vacancy/vacancy.component';


bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));

bootstrapApplication(CompaniesListComponent, {providers: [
  provideHttpClient(),
]});

bootstrapApplication(VacanciesListComponent, {providers: [
  provideHttpClient(),
]});

bootstrapApplication(VacancyComponent, {providers: [
  provideHttpClient(),
]});