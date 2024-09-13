
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
    }
}
