
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class HomeComponent implements OnInit {
  constructor(
    private router :Router
  ){

  }
  ngOnInit(): void {

  }
  // GotoProductDetails(){
  //   this.router.navigate(['/product-details'])
  //   window.location.href = 'product-details';
  // }
}
