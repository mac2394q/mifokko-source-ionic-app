import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialServiciosPageRoutingModule } from './historial-servicios-routing.module';

import { HistorialServiciosPage } from './historial-servicios.page';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';
import { HeaderComponentModule  } from '../elements/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialServiciosPageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [HistorialServiciosPage]
})
export class HistorialServiciosPageModule {}
