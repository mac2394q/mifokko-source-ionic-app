import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaDetallePage } from './oferta-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaDetallePageRoutingModule {}
