import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarClavePageRoutingModule } from './cambiar-clave-routing.module';

import { CambiarClavePage } from './cambiar-clave.page';

import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarClavePageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [CambiarClavePage]
})
export class CambiarClavePageModule {}
