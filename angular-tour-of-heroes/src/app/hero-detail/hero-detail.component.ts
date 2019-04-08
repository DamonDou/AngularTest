import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../Hero';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private messageServie :MessageService) { } 

  @Input()  selectedHero:Hero;

  @Input() selectedHeroName:string;

  ngOnInit() {
  }

}
