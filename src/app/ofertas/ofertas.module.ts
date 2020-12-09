import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasPageRoutingModule } from './ofertas-routing.module';

import { OfertasPage } from './ofertas.page';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';
import { HeaderComponentModule  } from '../elements/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasPageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [OfertasPage]
})
export class OfertasPageModule {}
