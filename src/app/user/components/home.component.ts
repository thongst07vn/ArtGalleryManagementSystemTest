
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { UserHeaderComponent } from '../layouts/header/user-header.component';
import { UserFooterComponent } from '../layouts/footer/user-footer.component';
import { BreadcrumbComponent } from '../layouts/breadcrumb/breadcrumb.component';
import { SidbarComponent } from '../layouts/sidebar/sidbar.component';

@Component({
  standalone: true,
  imports: [RouterOutlet,UserHeaderComponent,UserFooterComponent,BreadcrumbComponent,SidbarComponent],
  templateUrl: './home.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class HomeComponent implements OnInit {
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

        this.conect.addScript("src/bootstrap/js/bootstrap.bundle.min.js")
        this.conect.addScript("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
        this.conect.addScript("src/plugins/src/mousetrap/mousetrap.min.js")
        this.conect.addScript("src/plugins/src/waves/waves.min.js")
        this.conect.addScript("layouts/horizontal-light-menu/app.js")
    }
}
