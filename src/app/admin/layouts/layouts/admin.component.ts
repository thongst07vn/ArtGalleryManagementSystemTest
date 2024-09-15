import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { AdminHeaderComponent } from '../header/admin-header.component';
import { AdminSidbarComponent } from '../sidebar/admin-sidbar.component';
import { AdminFooterComponent } from '../footer/admin-footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,AdminHeaderComponent,AdminSidbarComponent,AdminFooterComponent],
  templateUrl: './admin.component.html',
  host:{
    'collision': 'AdminComponent'
  }
})
export class AdminComponent {
  constructor(
    private conect : Conect,
  ){}

  ngOnInit(): void {
    this.conect.addStyle("layouts/semi-dark-menu/css/light/loader.css")
    this.conect.addStyle("layouts/semi-dark-menu/css/dark/loader.css")
    this.conect.addScriptDefer("layouts/semi-dark-menu/loader.js")
    this.conect.addStyle("src/bootstrap/css/bootstrap.min.css")
    this.conect.addStyle("layouts/semi-dark-menu/css/light/plugins.css")
    this.conect.addStyle("layouts/semi-dark-menu/css/dark/plugins.css")
    this.conect.addStyle("src/plugins/src/apex/apexcharts.css")
    this.conect.addStyle("src/assets/css/light/dashboard/dash_1.css")
    this.conect.addStyle("src/assets/css/dark/dashboard/dash_1.css")

    
    // this.conect.addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js")
    this.conect.addScriptDefer("src/bootstrap/js/bootstrap.bundle.min.js")
    this.conect.addScriptDefer("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
    this.conect.addScriptDefer("src/plugins/src/mousetrap/mousetrap.min.js")
    this.conect.addScriptDefer("src/plugins/src/waves/waves.min.js")
    this.conect.addScript("layouts/semi-dark-menu/app.js")
    this.conect.addScript("src/plugins/src/apex/apexcharts.min.js")
    this.conect.addScript("src/assets/js/dashboard/dash_1.js")
    
}
}
