import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../Hero';
import {MessageService} from '../message.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private messageServie :MessageService,private route:ActivatedRoute,private location:Location,private heroService:HeroService ) { 

  } 

  hero:Hero;

  @Input()  selectedHero:Hero;

  @Input() selectedHeroName:string;

  ngOnInit() {

    const id = + this.route.snapshot.paramMap.get("id");
    this.getHero(id);
    this.selectedHero = this.hero;
    this.selectedHeroName = this.hero.name;
  }


   getHero(id:number):void {

    this.heroService.getHero(id).subscribe(a=>this.hero = a);

   }

  goBack(){
    this.location.back();
  }
}
