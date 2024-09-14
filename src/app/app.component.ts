import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from './conect';
import { UserHeaderComponent } from './user/layouts/header/user-header.component';
import { UserFooterComponent } from './user/layouts/footer/user-footer.component';
import { SidbarComponent } from './user/layouts/sidebar/sidbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,UserHeaderComponent,UserFooterComponent,SidbarComponent],

  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private conect : Conect
){}
async ngOnInit() {
    this.conect.addStyle("layouts/horizontal-light-menu/css/light/loader.css")
    this.conect.addStyle("layouts/horizontal-light-menu/css/dark/loader.css")
    this.conect.addScript("layouts/horizontal-light-menu/loader.js")
    this.conect.addStyle("src/bootstrap/css/bootstrap.min.css")
    this.conect.addStyle("layouts/horizontal-light-menu/css/light/plugins.css")
    this.conect.addStyle("layouts/horizontal-light-menu/css/dark/plugins.css")
    this.conect.removeScript("src/bootstrap/js/bootstrap.bundle.min.js")
    this.conect.removeScript("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
    this.conect.removeScript("src/plugins/src/mousetrap/mousetrap.min.js")
    this.conect.removeScript("src/plugins/src/waves/waves.min.js")
    this.conect.removeScript("layouts/horizontal-light-menu/app.js")

    await this.conect.addScriptAsync("src/bootstrap/js/bootstrap.bundle.min.js")
    await this.conect.addScriptAsync("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
    await this.conect.addScriptAsync("src/plugins/src/mousetrap/mousetrap.min.js")
    await this.conect.addScriptAsync("src/plugins/src/waves/waves.min.js")
    await this.conect.addScriptAsync("layouts/horizontal-light-menu/app.js")
}
}
