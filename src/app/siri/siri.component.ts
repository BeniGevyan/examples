import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siri',
  templateUrl: './siri.component.html',
  styleUrls: ['./siri.component.css']
})
export class SiriComponent implements OnInit {

  message: string;
  
  constructor() { }

  ngOnInit() {
  }

}
