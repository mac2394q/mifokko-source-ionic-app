import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaPageRoutingModule } from './empresa-routing.module';

import { EmpresaPage } from './empresa.page';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';
import { HeaderComponentModule  } from '../elements/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaPageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [EmpresaPage]
})
export class EmpresaPageModule {}
