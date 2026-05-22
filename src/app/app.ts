import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
