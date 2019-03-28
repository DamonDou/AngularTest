import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HEROS} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero:Hero = { name:"WinStorm",id:1};

  heros = HEROS;

  ngOnInit() {
  }

}
