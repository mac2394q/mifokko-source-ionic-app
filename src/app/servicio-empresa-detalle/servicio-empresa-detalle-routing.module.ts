import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioEmpresaDetallePage } from './servicio-empresa-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioEmpresaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioEmpresaDetallePageRoutingModule {}
