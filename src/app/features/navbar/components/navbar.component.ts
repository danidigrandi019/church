import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, NavbarDropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  sobreNosItems = [
    { label: 'Nossa História', url: '#historia' },
    { label: 'No que Cremos', url: '#crencas' },
    { label: 'Equipe', url: '#equipe' }
  ];

  ambientesItems = [
    { label: 'RED Kids', url: '#kids' },
    { label: 'RED Youth', url: '#youth' },
    { label: 'Celebrações', url: '#adults' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}