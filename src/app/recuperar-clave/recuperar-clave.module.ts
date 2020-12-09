import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarClavePageRoutingModule } from './recuperar-clave-routing.module';

import { RecuperarClavePage } from './recuperar-clave.page';

import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarClavePageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule,
  ],
  declarations: [RecuperarClavePage]
})
export class RecuperarClavePageModule {}
