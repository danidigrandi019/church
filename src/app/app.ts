import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/components/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/components/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
