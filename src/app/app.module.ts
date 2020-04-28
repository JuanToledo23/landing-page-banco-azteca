import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CreditoElektraEjemplosComponent } from './credito-elektra-ejemplos/credito-elektra-ejemplos.component';
import { CreditoElektraDetallesComponent } from './credito-elektra-detalles/credito-elektra-detalles.component';
import { QrComponent } from './qr/qr.component';
import { ErrorCargaComponent } from './error-carga/error-carga.component';
import { ErrorConexionComponent } from './error-conexion/error-conexion.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditoElektraEjemplosComponent,
    CreditoElektraDetallesComponent,
    QrComponent,
    ErrorCargaComponent,
    ErrorConexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    CarouselModule
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
