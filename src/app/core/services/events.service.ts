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
      dateTime: '2026-06-20T19:00',
      title: 'Jantar dos Casais',
      description: 'Um jantar e uma noite pra ficar na memória. Valor: R$80,00. Reserve com o Ministério de Casais.'
    },
    {
      dateTime: '2026-06-26T20:00',
      title: 'Culto de Mulheres',
      description: '"Esperança que não morre no frio" — Você é nossa convidada! Preletora: Presbítera Flávia P. Silva. Ao final teremos caldinhos.'
    }
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

