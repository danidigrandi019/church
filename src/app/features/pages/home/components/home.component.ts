import { Component } from '@angular/core';
import { HeroComponent } from '../../../hero/hero.component';
import { AboutComponent } from '../../../about/components/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
