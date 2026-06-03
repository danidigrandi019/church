import { Injectable, signal } from '@angular/core';

export interface ChurchEvent {
  date: string;
  time: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsState = signal<ChurchEvent[]>([
    {
      date: 'Sáb, 06 Jun',
      time: '22:00',
      title: 'Vigília',
      description: 'Você é nosso convidado(a)! Uma noite de oração e encontro com Deus. Venha!'
    },
    {
      date: 'Sex, 20 Jun',
      time: '19:00',
      title: 'Jantar dos Casais',
      description: 'Um jantar e uma noite pra ficar na memória. Valor: R$80,00. Reserve com o Ministério de Casais.'
    },
    {
      date: 'Sex, 26 Jun',
      time: '20:00',
      title: 'Culto de Mulheres',
      description: '"Esperança que não morre no frio" — Você é nossa convidada! Preletora: Presbítera Flávia P. Silva. Ao final teremos caldinhos.'
    }
  ]);

  get events() {
    return this.eventsState.asReadonly();
  }
}
