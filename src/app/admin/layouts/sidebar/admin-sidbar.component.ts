import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';

@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin-sidbar.component.html',
  host:{
    'collision': 'AdminSidbarComponent'
  }
})
export class AdminSidbarComponent{
 
}
