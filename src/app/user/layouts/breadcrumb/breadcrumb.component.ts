import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './breadcrumb.component.html',
  host:{
    'collision': 'BreadcrumbComponent'
  }
})
export class BreadcrumbComponent {
  
}
