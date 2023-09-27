import { Component } from '@angular/core';
import { game, games } from 'src/app/data/gamesDatabase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games: game[] = games;

}
