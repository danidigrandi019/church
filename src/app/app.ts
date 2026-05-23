import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/components/navbar.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
