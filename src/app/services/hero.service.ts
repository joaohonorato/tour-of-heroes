import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');

    return of(HEROES);
  }

  getHero(id: number): any {
    this.messageService.add(`Hero Service: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
