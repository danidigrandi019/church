import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
