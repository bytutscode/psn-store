import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card-pricing',
  templateUrl: './game-card-pricing.component.html',
  styleUrls: ['./game-card-pricing.component.css']
})
export class GameCardPricingComponent {
  @Input() label: string = ''
  @Input()  consoles: string = ""
  @Input() price: number = 0
}
