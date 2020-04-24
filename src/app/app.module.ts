import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditoElektraEjemplosComponent } from './credito-elektra-ejemplos/credito-elektra-ejemplos.component';
import { CreditoElektraDetallesComponent } from './credito-elektra-detalles/credito-elektra-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditoElektraEjemplosComponent,
    CreditoElektraDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
