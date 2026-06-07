import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterOutlet
import { RouterLink } from '@angular/router'; // Import RouterLink
import { RouterLinkActive } from '@angular/router'; // Import RouterLinkng builnn

@Component({
  selector: 'iwg-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, CommonModule], // Import directives here
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;

  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
