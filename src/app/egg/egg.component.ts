import { Component, OnInit } from '@angular/core';
import { PageRepositoryService } from '../page-repository.service';

@Component({
  selector: 'app-egg',
  templateUrl: './egg.component.html',
  styleUrls: ['./egg.component.css']
})
export class EggComponent implements OnInit {
  content: string = "";
  constructor(private pageRepository: PageRepositoryService) { }

  ngOnInit(): void {
    this.pageRepository.getRandomPage().subscribe(res => {
      console.log("test");
    });
  }

}
