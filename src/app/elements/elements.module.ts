import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    BottomMenuComponent
  ],
  exports: [
    HeaderComponent,
    BottomMenuComponent
  ],
})
export class ElementsModule { }
