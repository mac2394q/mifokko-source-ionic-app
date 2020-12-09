import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndependientesPageRoutingModule } from './independientes-routing.module';

import { IndependientesPage } from './independientes.page';
import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';
import { HeaderComponentModule  } from '../elements/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndependientesPageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [IndependientesPage]
})
export class IndependientesPageModule {}
