import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarLogoComponent } from './nav-bar/nav-bar-logo/nav-bar-logo.component';
import { NavBarMenuComponent } from './nav-bar/nav-bar-menu/nav-bar-menu.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NavBarLogoComponent,
    NavBarMenuComponent
  ],
  exports:[
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
