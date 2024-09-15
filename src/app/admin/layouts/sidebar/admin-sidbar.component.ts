import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { CalendarComponent } from '../../components/calendar/calendar.component';


@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin-sidbar.component.html',
  
  host:{
    'collision': 'AdminSidbarComponent'
  }
})
export class AdminSidbarComponent implements OnInit{
  
  @Output() addActive = new EventEmitter<any>();
  actives:string
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit() {
    this.actives = ''
  }
  addActvies(){
    this.addActive.emit(this.actives)
  }
}
