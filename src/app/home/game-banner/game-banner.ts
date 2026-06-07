import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iwg-game-banner',
  imports: [CommonModule],
  templateUrl: './game-banner.html',
  styleUrl: './game-banner.scss',
})
export class GameBanner implements OnInit {
  topGames: Game[] = [];
  constructor(private gameService: GameService) {
    
  }

  ngOnInit() {
    this.topGames = this.gameService.getTopGames();
  }
}
