import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.css'
})
export class CompaniesListComponent implements OnInit{
  companies: Company[] = [];

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
   
    this.router.navigate(['/vacancies'], { queryParams: { companyId: companyId } });
  }
}
