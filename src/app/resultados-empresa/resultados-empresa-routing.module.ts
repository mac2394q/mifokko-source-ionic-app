import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosEmpresaPage } from './resultados-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosEmpresaPageRoutingModule {}
