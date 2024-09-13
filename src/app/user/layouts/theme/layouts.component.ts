
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { UserHeaderComponent } from '../header/user-header.component';
import { UserFooterComponent } from '../footer/user-footer.component';
import { SidbarComponent } from '../sidebar/sidbar.component';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,UserHeaderComponent,UserFooterComponent,SidbarComponent],
  templateUrl: './layouts.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class LayoutsComponent implements OnInit {
    constructor(
        private conect : Conect
    ){}
    ngOnInit(): void {
        this.conect.addStyle("layouts/horizontal-light-menu/css/light/loader.css")
        this.conect.addStyle("layouts/horizontal-light-menu/css/dark/loader.css")
        this.conect.addScript("layouts/horizontal-light-menu/loader.js")
        this.conect.addStyle("src/bootstrap/css/bootstrap.min.css")
        this.conect.addStyle("layouts/horizontal-light-menu/css/light/plugins.css")
        this.conect.addStyle("layouts/horizontal-light-menu/css/dark/plugins.css")


        this.conect.addScriptAsync("src/bootstrap/js/bootstrap.bundle.min.js")
        this.conect.addScriptAsync("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
        this.conect.addScriptAsync("src/plugins/src/mousetrap/mousetrap.min.js")
        this.conect.addScriptAsync("src/plugins/src/waves/waves.min.js")
        this.conect.addScriptAsync("layouts/horizontal-light-menu/app.js")
    }
}
