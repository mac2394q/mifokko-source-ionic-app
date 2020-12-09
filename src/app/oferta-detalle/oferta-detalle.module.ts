import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaDetallePageRoutingModule } from './oferta-detalle-routing.module';

import { OfertaDetallePage } from './oferta-detalle.page';

import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaDetallePageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [OfertaDetallePage]
})
export class OfertaDetallePageModule {}
