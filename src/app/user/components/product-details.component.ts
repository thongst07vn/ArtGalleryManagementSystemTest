
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';


@Component({
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product-details.component.html',
  host:{
    'collision': 'ProductDetailsComponent'
  }
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private conect : Conect
  ){}
  ngOnInit() {
    // window.location.reload();
     this.conect.removeScript("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js")
     this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    this.conect.removeScript("src/assets/js/apps/ecommerce-details.js")


     this.conect.addScriptAsync("src/bootstrap/js/bootstrap.bundle.min.js")
     this.conect.addScriptAsync("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
     this.conect.addScriptAsync("src/plugins/src/mousetrap/mousetrap.min.js")
     this.conect.addScriptAsync("src/plugins/src/waves/waves.min.js")
     this.conect.addScriptAsync("layouts/horizontal-light-menu/app.js")

     this.conect.addScriptAsync("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js")
     this.conect.addScriptAsync("src/plugins/src/glightbox/glightbox.min.js")

     this.conect.addScriptAsync("src/plugins/src/splide/splide.min.js")

     this.conect.addScriptAsync("src/assets/js/apps/ecommerce-details.js")

  }
}
