import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosEmpresaPageRoutingModule } from './resultados-empresa-routing.module';

import { ResultadosEmpresaPage } from './resultados-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosEmpresaPageRoutingModule
  ],
  declarations: [ResultadosEmpresaPage]
})
export class ResultadosEmpresaPageModule {}
