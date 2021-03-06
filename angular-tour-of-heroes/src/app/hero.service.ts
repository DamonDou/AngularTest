import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {HEROS} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros():Observable<Hero[]> {

    this.messageService.add("HeroService: fetched heroes");
    return of(HEROS);

  }

  getHero(id:number):Observable<Hero>{
    
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of( HEROS.find(a=>a.id === id));
  }

}
