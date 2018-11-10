import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'card-information',
  templateUrl: '../views/card-information/card-information.component.html',
  styleUrls: ['../views/card-information/card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  @Output()
  openForm: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  remove: EventEmitter<string> = new EventEmitter<string>();

  @Input('animal') animal: Animal;


  constructor() { }

  ngOnInit() {
    this.animal = new Animal("", "", "", "", "", "", "", false, false, "", "", [], false, false, null);
  }

  updateAnimal() {
    this.openForm.emit("open");
  }

  removeAnimal(){
    this.remove.emit("open");
  }

}
