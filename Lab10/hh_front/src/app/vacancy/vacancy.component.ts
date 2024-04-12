import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  vacancy: Vacancy;
  constructor( private route: ActivatedRoute, private service: VacancyService) {
    this.vacancy = {} as Vacancy;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let strid = params.get('id');
      if (strid) {
        let id = +strid;
        this.service.getVacancy(id).subscribe((value) => {
          console.log(value)
          this.vacancy = value;
        })
      }
    });
  }
}
