import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-credito-elektra-detalles',
  templateUrl: './credito-elektra-detalles.component.html',
  styleUrls: ['./credito-elektra-detalles.component.scss']
})
export class CreditoElektraDetallesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  articulos = [
    { id: 0, img: 'assets/img/telefono1.png',
      nombre: 'Motorola Moto E6 Play', marca: '32GB Movistar - Negro', totalPagar: '4,320', descuentoRenovacionAnterior: 70,
      descuentoRenovacionActual: 60, precioContado: '2,500', tuPrecioNormal: '2,671', tuPrecioReal: '2,429',
      caracteristicas1: [
        'Pantalla de 6.5 Pulgadas', 'Cámara trasera de 48 Mpx + 8 Mpx + 2Mpx y frontal de 16 Mpx'
      ],
      caracteristicas2: [
        'Batería de 4000 mAh', 'Memoria interna de 128 GB, RAM 6 GB'
      ]
    },
    { id: 1, img: 'assets/img/telefono3.png',
      nombre: 'Motorola G8 Play 32GB', marca: 'AT&T - Rojo Frambuesa', totalPagar: '4,320', descuentoRenovacionAnterior: 70,
      descuentoRenovacionActual: 60, precioContado: '3,699', tuPrecioNormal: '3,999', tuPrecioReal: '3,599',
      caracteristicas1: [
        'Pantalla de 6.2 Pulgadas', 'Memoria Interna de 32 GB, RAM 2 GB', 'Batería de 4000 mAh'
      ],
      caracteristicas2: [
        'Cámara trasera de 13 Mpx + 2Mpx (Prof) + 8 Mpx (Video Wide) y frontal de 8 Mpx'
      ]
    },
    { id: 2, img: 'assets/img/telefono2.png',
      nombre: 'Huawei Y9s 128GB', marca: 'Movistar - Azul', totalPagar: '5,760', descuentoRenovacionAnterior: 90,
      descuentoRenovacionActual: 80, precioContado: '6,700', tuPrecioNormal: '6,999', tuPrecioReal: '6,299',
      caracteristicas1: [
        'Pantalla de 6.5 Pulgadas', 'Memoria interna de 128 GB, RAM 6 GB'
      ],
      caracteristicas2: [
        'Cámara trasera de 48 Mpx + 8 Mpx + 2 Mpx y frontal de 16 Mpx', 'Batería de 4000 mAh'
      ]
    }
  ];

  private subscribeDetalle: any;
  articuloSeleccionado: any;
  ngOnInit(): void {
    this.subscribeDetalle = this.route.params.subscribe(params => {
      this.articuloSeleccionado = this.articulos[params.id];
      console.log(this.articuloSeleccionado);
    });
  }

  ngOnDestroy() {
    this.subscribeDetalle.unsubscribe();
  }


}
