import { Component, inject } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { EventsService, ChurchEvent } from '../../../core/services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  private eventsService = inject(EventsService);

  get events(): ChurchEvent[] {
    return this.eventsService.events();
  }

  fmt(dt: string, f: string): string {
    return formatDate(dt, f, 'pt').replace(/\./g, '');
  }
}
