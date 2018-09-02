import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: '../views/information/information.component.html',
  styleUrls: ['../views/information/information.component.css']
})
export class InformationComponent implements OnInit {

  public phones: string[] = [""];
  public emails: string[] = [""];
  public uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  removePhone(phone: string) {
    let index = this.phones.indexOf(phone);
    if (index > -1 && this.phones.length > 1) {
      this.phones.splice(index, 1);
    }
  }

  removeEmail(email: string) {
    let index = this.emails.indexOf(email);
    if (index > -1 && this.emails.length > 1) {
      this.emails.splice(index, 1);
    }
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
