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
      dateTime: '2026-07-25T16:00:00',
      title: 'Conferência Identidade',
      description:
        'Evento da Geração Jovem. Entrada: 1Kg de alimento não perecível. Formulário de inscrição disponível no grupo do WhatsApp.',
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

