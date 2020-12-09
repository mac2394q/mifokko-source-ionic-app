import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndependientesPage } from './independientes.page';

const routes: Routes = [
  {
    path: '',
    component: IndependientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndependientesPageRoutingModule {}
