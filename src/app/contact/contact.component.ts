import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any = [];
  number :any =[];
  constructor() { 
    this.number=["1","2","3","4","5"]
  }

  ngOnInit() {
  }
  onSubmit(ngForm) {
    console.log(ngForm);
    let name = ngForm.name;
    let email = ngForm.email;
    let phone = ngForm.phone;
    let state = ngForm.state;
    let msg = ngForm.msg;
    console.log("Contact Detail: "+ name, email, phone, state, msg )
    this.contact.push({ name, email, phone, state, msg });
    console.log("Contact Detail: "+ JSON.stringify(this.contact))

  }
}
