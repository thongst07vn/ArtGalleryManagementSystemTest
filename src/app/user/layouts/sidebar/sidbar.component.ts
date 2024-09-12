import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sidbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidbar.component.html',
  host:{
    'collision': 'SidbarComponent'
  }
})
export class SidbarComponent {
  
}
