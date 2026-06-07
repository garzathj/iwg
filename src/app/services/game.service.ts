import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseUrl = 'https://iwggamesapi.azurewebsites.net/games/';
  constructor(private http: HttpClient) { }

  getTopGames(): Game[] {
    var games: Game[] = [];
    var gameInfo: Game = {
      name: '',
      img: 'g1'
    };
    var gameInfo2: Game = {
      name: '',
      img: 'g2'
    };
    var gameInfo3: Game = {
      name: '',
      img: 'g3'
    };
    var gameInfo4: Game = {
      name: '',
      img: 'g4'
    };
    var gameInfo5: Game = {
      name: '',
      img: 'g5'
    };

    games.push(gameInfo);
    games.push(gameInfo2);
    games.push(gameInfo3);
    games.push(gameInfo4);
    games.push(gameInfo5);

    return games;
  }

  getGamesByConsole(): Game[] {
    var games: Game[] = [];
    var gameInfo: Game = {
      name: '',
      img: 'ps3/best_of_playstation_network_front.png'
    };
    var gameInfo2: Game = {
      name: '',
      img: 'ps3/alicemadness_front.png'
    };
    var gameInfo3: Game = {
      name: '',
      img: 'ps3/lost_dimension_front.png'
    };
    var gameInfo4: Game = {
      name: '',
      img: 'ps3/puppeteer_front.png'
    };
    var gameInfo5: Game = {
      name: '',
      img: 'ps3/shadows_of_the_damned_front.png'
    };

    games.push(gameInfo);
    games.push(gameInfo2);
    games.push(gameInfo3);
    games.push(gameInfo4);
    games.push(gameInfo5);
    games.push(gameInfo5);
    games.push(gameInfo5);
    games.push(gameInfo);
    games.push(gameInfo2);
    games.push(gameInfo3);
    games.push(gameInfo4);
    games.push(gameInfo5);
    games.push(gameInfo5);
    games.push(gameInfo5);

    return games;
  }
}
