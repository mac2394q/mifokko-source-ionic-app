import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioProfesionalDetallePageRoutingModule } from './servicio-profesional-detalle-routing.module';

import { ServicioProfesionalDetallePage } from './servicio-profesional-detalle.page';

import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioProfesionalDetallePageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [ServicioProfesionalDetallePage]
})
export class ServicioProfesionalDetallePageModule {}
