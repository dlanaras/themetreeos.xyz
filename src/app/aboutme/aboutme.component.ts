import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  height : number = 0;
  width : number = 0;

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

  calcSize(event : Event): void {
    this.height = ((event.target) as Window).innerHeight;
    this.width = ((event.target) as Window).innerWidth;
  }

}
