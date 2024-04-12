
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CompaniesListComponent } from "./companies-list/companies-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CompaniesListComponent,RouterModule]
})
export class AppComponent {
  title = 'hh_front';
}
