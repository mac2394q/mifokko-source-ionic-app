import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosCategoriaPage } from './resultados-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosCategoriaPageRoutingModule {}
