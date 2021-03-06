import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HEROS} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros : Hero[];

  constructor(private heroService: HeroService,private messageService:MessageService) {

   }

  
  selectedHero:Hero;

  ngOnInit() {

   this.getHeros();

  }

  onSelect(hero:Hero): void {

    this.selectedHero = hero;
    this.messageService.add("点击了:"+hero.name);

  }

  getHeros():void {

     this.heroService.getHeros().subscribe(heros=>this.heros = heros);
     
  }

}
