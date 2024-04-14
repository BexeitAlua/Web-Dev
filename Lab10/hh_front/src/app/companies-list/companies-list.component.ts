import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VacancyComponent } from "../vacancy/vacancy.component";

@Component({
    selector: 'app-companies-list',
    standalone: true,
    templateUrl: './companies-list.component.html',
    styleUrl: './companies-list.component.css',
    imports: [CommonModule, HttpClientModule, VacancyComponent]
})
export class CompaniesListComponent implements OnInit{

  companies: Company[] = [];
  vacancies!: Vacancy[];
  selectedCompanyId: number | null = null; 
  company!: Company;

  constructor(private companyService: CompanyService,private router: Router) { }

  ngOnInit(): void {
    this.loadCompanies();

   
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }
 
  showVacancies(companyId: number): void {
   
  }
}
