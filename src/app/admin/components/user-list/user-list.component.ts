import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './user-list.component.html',
  host:{
    'collision': 'UserListComponent'
  }
})
export class UserListComponent {
  constructor(
    private conect : Conect,
  ){}

  ngOnInit(): void {
    this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    this.conect.removeScript("src/assets/js/custom.js")
    this.conect.removeScript("src/plugins/src/table/datatable/datatables.js")
    this.conect.removeScript("src/plugins/src/fullcalendar/fullcalendar.min.js")
    this.conect.removeScript("src/plugins/src/uuid/uuid4.min.js")
    this.conect.removeScript("src/plugins/src/fullcalendar/custom-fullcalendar.js")
    this.conect.removeScript("src/plugins/src/apex/apexcharts.min.js")
    this.conect.removeScript("src/assets/js/dashboard/dash_1.js")

    // this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    // this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    // this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    // this.conect.removeScript("src/plugins/src/filepond/filepond.min.js")
    // this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")

    // this.conect.addStyle("layouts/semi-dark-menu/css/light/loader.css")
    // this.conect.addStyle("layouts/semi-dark-menu/css/dark/loader.css")
    // this.conect.addScriptDefer("layouts/semi-dark-menu/loader.js")
    // this.conect.addStyle("src/bootstrap/css/bootstrap.min.css")
    // this.conect.addStyle("layouts/semi-dark-menu/css/light/plugins.css")
    // this.conect.addStyle("layouts/semi-dark-menu/css/dark/plugins.css")
    this.conect.addStyle("src/plugins/src/table/datatable/datatables.css")
    this.conect.addStyle("src/plugins/css/light/table/datatable/dt-global_style.css")
    this.conect.addStyle("src/plugins/css/light/table/datatable/custom_dt_miscellaneous.css")
    this.conect.addStyle("src/plugins/css/dark/table/datatable/dt-global_style.css")
    this.conect.addStyle("src/plugins/css/dark/table/datatable/custom_dt_miscellaneous.css")
    
    // this.conect.addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js")
    // this.conect.addScriptDefer("src/bootstrap/js/bootstrap.bundle.min.js")
    // this.conect.addScriptDefer("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
    // this.conect.addScriptDefer("src/plugins/src/mousetrap/mousetrap.min.js")
    // this.conect.addScriptDefer("src/plugins/src/waves/waves.min.js")
    // this.conect.addScript("layouts/semi-dark-menu/app.js")
    this.conect.addScript("src/plugins/src/global/vendors.min.js")
    this.conect.addScript("src/assets/js/custom.js")
    this.conect.addScript("src/plugins/src/table/datatable/datatables.js")
    this.conect.addScript("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    this.conect.addScript("src/plugins/src/table/datatable/button-ext/jszip.min.js")
    this.conect.addScript("src/plugins/src/table/datatable/button-ext/buttons.html5.min.js")
    this.conect.addScript("src/plugins/src/table/datatable/button-ext/buttons.print.min.js")
    this.conect.addScript("src/plugins/src/table/datatable/custom_miscellaneous.js")
    this.conect.reloadPage()

}
}
