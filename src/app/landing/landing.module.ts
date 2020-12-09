import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';

import { HeaderComponentModule  } from '../elements/header/header.module';

import { BottomMenuComponentModule } from '../elements/bottom-menu/bottom-menu.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponentModule,
    BottomMenuComponentModule,
    LandingPageRoutingModule
   
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
