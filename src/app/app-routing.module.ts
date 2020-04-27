import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditoElektraDetallesComponent } from './credito-elektra-detalles/credito-elektra-detalles.component';
import { QrComponent } from './qr/qr.component';


const routes: Routes = [
  { path: '', component: CreditoElektraDetallesComponent },
  { path: 'ejemplos', component: CreditoElektraDetallesComponent },
  { path: 'qr', component: QrComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
