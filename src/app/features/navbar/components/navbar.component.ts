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

  sobreNosItems = [
    { label: 'Nossa História', routerLink: '/history' },
    { label: 'Equipe', routerLink: '/', fragment: 'about' }
  ];

  ambientesItems = [
    { label: 'RED Kids', routerLink: '/', fragment: 'kids' },
    { label: 'RED Youth', routerLink: '/', fragment: 'youth' },
    { label: 'Celebrações', routerLink: '/', fragment: 'adults' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isDarkTheme = event.urlAfterRedirects.includes('/history');
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