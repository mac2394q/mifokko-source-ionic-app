import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioProfesionalDetallePage } from './servicio-profesional-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioProfesionalDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioProfesionalDetallePageRoutingModule {}
