import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  result: number;

  constructor() { }

  roll() {
    this.result = Math.floor(Math.random() * 6) + 1;
  }

  ngOnInit() {
    this.roll();
  }

}
