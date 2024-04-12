import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancies-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './vacancies-list.component.html',
  styleUrl: './vacancies-list.component.css'
})
export class VacanciesListComponent {
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.vacancyService.getVacancies().subscribe((v) => {
      this.vacancies = v;
    });
  }
}
