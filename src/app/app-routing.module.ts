import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditoElektraDetallesComponent } from './credito-elektra-detalles/credito-elektra-detalles.component';
import { QrComponent } from './qr/qr.component';
import { CreditoElektraEjemplosComponent } from './credito-elektra-ejemplos/credito-elektra-ejemplos.component';
import { ErrorConexionComponent } from './error-conexion/error-conexion.component';
import { ErrorCargaComponent } from './error-carga/error-carga.component';


const routes: Routes = [
  { path: '', component: CreditoElektraEjemplosComponent },
  { path: 'detalles/:id', component: CreditoElektraDetallesComponent },
  { path: 'qr', component: QrComponent  },
  { path: 'errorCarga', component: ErrorCargaComponent  },
  { path: 'errorConexion', component: ErrorConexionComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
