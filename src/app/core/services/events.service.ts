import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';

export interface ChurchEvent {
  dateTime: string;
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  private destroyRef = inject(DestroyRef);
  private now = signal(Date.now());

  private allEvents = signal<ChurchEvent[]>([
    {
      dateTime: '2026-11-14T08:00:00',
      title: 'Encerramento dos Homens',
      description:
        'Um dia inteiro de comunhão, palavra e fogo de chão. A partir das 8h da manhã em uma chácara. O dia inteiro!',
    },
  ]);

  readonly events = computed(() => {
    const now = this.now();
    return this.allEvents().filter(e => new Date(e.dateTime).getTime() > now);
  });

  constructor() {
    const id = setInterval(() => this.now.set(Date.now()), 60_000);
    this.destroyRef.onDestroy(() => clearInterval(id));
  }
}

