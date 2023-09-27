import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() cardLabel?: string = ''
  @Input() label: string = ''
  @Input()  consoles: string = ''
  @Input() price: number = 0
  @Input() gamePhoto: string = ''
}
