import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LogoComponent } from '../../logo/logo.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, NavbarDropdownComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isDarkTheme = false;
  private routerSub?: Subscription;

  private darkThemeRoutes = ['/history', '/team', '/young-generation'];

  sobreNosItems = [
    { label: 'Nossa História', routerLink: '/history' },
    { label: 'Equipe', routerLink: '/team' }
  ];

  ambientesItems = [
    { label: 'Kids', routerLink: '/' },
    { label: 'Geração Jovem', routerLink: '/young-generation' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isDarkTheme = this.darkThemeRoutes.some(route => event.urlAfterRedirects.includes(route));
    });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}