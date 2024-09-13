
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
  ){
    
  }
  ngOnInit(): void {
    this.conect.reloadPage()
    this.conect.addStyle("src/assets/css/light/components/accordions.css")
    this.conect.addStyle("src/assets/css/dark/components/accordions.css")
    this.conect.addStyle("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css")
    this.conect.addStyle("src/plugins/src/glightbox/glightbox.min.css")
    this.conect.addStyle("src/plugins/src/splide/splide.min.css")
    this.conect.addStyle("src/assets/css/light/components/tabs.css")
    this.conect.addStyle("src/assets/css/light/apps/ecommerce-details.css")
    this.conect.addStyle("src/assets/css/dark/components/tabs.css")
    this.conect.addStyle("src/assets/css/dark/apps/ecommerce-details.css")
    this.conect.addScriptDefer("src/plugins/src/global/vendors.min.js")
    this.conect.addScriptDefer("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js")
    this.conect.addScriptDefer("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.addScriptDefer("src/plugins/src/splide/splide.min.js")
    this.conect.addScriptDefer("src/assets/js/apps/ecommerce-details.js")
    this.conect.reloadPage()

  }
}
