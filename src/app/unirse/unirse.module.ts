import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirsePageRoutingModule } from './unirse-routing.module';

import { UnirsePage } from './unirse.page';


import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirsePageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [UnirsePage]
})
export class UnirsePageModule {}
