import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/components/navbar.component';
import { FooterComponent } from './features/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }

