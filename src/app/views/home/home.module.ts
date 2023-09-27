import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameCardLabelComponent } from './game-card/game-card-label/game-card-label.component';
import { GameCardPricingComponent } from './game-card/game-card-pricing/game-card-pricing.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameCardComponent,
    GameCardLabelComponent,
    GameCardPricingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
