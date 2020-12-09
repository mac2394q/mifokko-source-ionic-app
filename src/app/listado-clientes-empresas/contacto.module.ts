import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoPageRoutingModule } from './contacto-routing.module';

import { ContactoPage } from './contacto.page';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';
import { HeaderComponentModule  } from '../elements/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoPageRoutingModule,
    HeaderComponentModule,
    BottomMenuComponentModule
  ],
  declarations: [ContactoPage]
})
export class ContactoPageModule {}
