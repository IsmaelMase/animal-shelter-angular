import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals-list',
  templateUrl: '../views/animals-list/animals-list.component.html',
  styleUrls: ['../views/animals-list/animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  public fields: any[];
  public selectedFields: any[];

  constructor() {
    this.fields = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];
  }

  ngOnInit() {
  }

  reloadAnimalList(){
    console.log("se ha hecho algun cambio");
  }

}
