import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: Array<{ label: string; url: string }>;
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
