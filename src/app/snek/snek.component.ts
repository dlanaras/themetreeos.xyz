import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snek',
  templateUrl: './snek.component.html',
  styleUrls: ['./snek.component.css']
})
export class SnekComponent implements OnInit {
  ssss: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sss() {
    this.ssss = true;
  }

}
