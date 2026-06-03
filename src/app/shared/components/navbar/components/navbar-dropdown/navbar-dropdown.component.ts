import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: Array<{ label: string; routerLink: string; fragment?: string }>;
  @Output() itemClicked = new EventEmitter<void>();

  isMobileOpen = false;

  toggleDropdown(event: Event): void {
    if (window.innerWidth < 1024) {
      event.preventDefault();
      event.stopPropagation();
      this.isMobileOpen = !this.isMobileOpen;
    }
  }

  closeDropdown(): void {
    this.isMobileOpen = false;
  }

  onItemClick(): void {
    this.closeDropdown();
    this.itemClicked.emit();
  }
}
