import { Component } from '@angular/core';

@Component({
  selector: 'iwg-game-console-banner',
  imports: [],
  templateUrl: './game-console-banner.html',
  styleUrl: './game-console-banner.scss',
})
export class GameConsoleBanner {

  gameConsoleClick(console: string) {
    /*this.router.navigate(['/games'], { queryParams: { gameId: game.token } });*/
    //this.router.navigate(['/games/' + console]);
  }
}
