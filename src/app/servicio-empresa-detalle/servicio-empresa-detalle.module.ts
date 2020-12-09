import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioEmpresaDetallePageRoutingModule } from './servicio-empresa-detalle-routing.module';

import { ServicioEmpresaDetallePage } from './servicio-empresa-detalle.page';

import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioEmpresaDetallePageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [ServicioEmpresaDetallePage]
})
export class ServicioEmpresaDetallePageModule {}
