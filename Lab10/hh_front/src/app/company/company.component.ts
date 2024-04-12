import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Company, Vacancy } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  company: Company;
  vacancies: Vacancy[] = [];
  constructor( private route: ActivatedRoute, private service: CompanyService) {
    this.company = {} as Company;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let strid = params.get('id');
      if (strid) {
        let id = +strid;
        this.service.getCompany(id).subscribe((company) => {
          this.company = company;
        })
        this.service.getCompanyVacancies(id).subscribe((v) => {
          this.vacancies = v;
        })
      }
    });
  }
}
