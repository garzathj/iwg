import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './user/cart/cart';
import { Games } from './items/games/games';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: { reuseComponent: true }
  },
  {
    path: 'games/:gameConsole',
    component: Games,
    data: { reuseComponent: true }
  },
  {
    path: 'cart',
    component: Cart,
    data: { reuseComponent: true }
  },
];
