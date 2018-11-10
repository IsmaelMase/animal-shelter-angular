import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'animal-form',
  templateUrl: '../views/animal-form/animal-form.component.html',
  styleUrls: ['../views/animal-form/animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  @Output()
  closeSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  public animal: Animal;
  public animalForm: FormGroup;
  public uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.animal = new Animal("", "", "", "", "", "", "", false, false, "", "", [], false, false, null);
    this.animalForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'breed': new FormControl('', Validators.required),
      'specie': new FormControl('', Validators.required),
      'age': new FormControl('', Validators.required),
      'weigt': new FormControl(1, Validators.min(1)),
  });
  }

  saveAnimal() {
    this.closeSideBar.emit(true);
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
