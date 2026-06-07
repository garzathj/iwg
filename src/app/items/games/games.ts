import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'iwg-games',
  imports: [CommonModule, MatIconModule],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games implements OnInit {
  asr = '';
  bcConsole: string = '#4a53ff';
  games: Game[] = [];

  constructor(gs: GlobalService, private gameService: GameService) {
    this.asr = gs.asr;
  }

  ngOnInit() {
    this.games = this.gameService.getGamesByConsole();
  }
}
