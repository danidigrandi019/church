import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LogoComponent } from '../../logo/logo.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, NavbarDropdownComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  isDarkTheme = false;

  private darkThemeRoutes = ['/history', '/team', '/young-generation', '/events', '/donate'];

  sobreNosItems = [
    { label: 'Nossa História', routerLink: '/history' },
    { label: 'Equipe', routerLink: '/team' }
  ];

  ambientesItems = [
    { label: 'Kids', routerLink: '/' },
    { label: 'Geração Jovem', routerLink: '/young-generation' }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe((event: any) => {
      this.isDarkTheme = this.darkThemeRoutes.some(route => event.urlAfterRedirects.includes(route));
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}