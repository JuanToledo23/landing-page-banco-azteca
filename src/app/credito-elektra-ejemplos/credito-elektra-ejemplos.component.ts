import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-credito-elektra-ejemplos',
  templateUrl: './credito-elektra-ejemplos.component.html',
  styleUrls: ['./credito-elektra-ejemplos.component.scss']
})
export class CreditoElektraEjemplosComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    items: 1,
    nav: false
  };

  barra = false;
  ngOnInit(): void {
    const innerWidth = window.innerWidth;
    this.onResize(innerWidth);
  }

  onResize(width) {
    this.barra = false;
    if (width <= 700) {
      this.barra = true;
    }
  }

}
