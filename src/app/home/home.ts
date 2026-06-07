import { Component } from '@angular/core';
import { GameConsoleBanner } from './game-console-banner/game-console-banner';
import { GameBanner } from './game-banner/game-banner';
import { PinkBanner } from './pink-banner/pink-banner';

@Component({
  selector: 'iwg-home',
  imports: [GameBanner, PinkBanner, GameConsoleBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
