import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $;
declare var document;
@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  phonebook = [];
  phonebookArray = [];
  name: any;
  email: any;
  city: any;
  phone: any;
  error: any;
  showerror: boolean = false;
  customForm: any;
  constructor() {
    this.phonebook = ['S.no', 'Name', 'Email', 'Phone', 'City', 'Action']
    this.phonebookArray = []
    
  }
  onSubmit() {
    // console.log(formValue);
    // let name = formValue.value.name;
    // let email = formValue.value.email;
    // let phoneNumber = formValue.value.phone;
    // let city = formValue.value.city;
    if (this.name && this.email && this.phone && this.city) {
      this.phonebookArray.push({ Name: this.name, Email: this.email, Phone: this.phone, City: this.city });
      console.log(this.phonebookArray);
      document.getElementById("phoneform").reset();
      $('#phoneform input').next().removeClass('active');
    }
    else {
      this.showerror = true;
      this.error = "Please fill all fields"
    }

  }
  closemodel() {
    $('.modal').modal();
  }
  title = "PhoneBook";
  ngOnInit() {
    $('.modal').modal();
    $('[data-dismiss="alert"]').click(function () {
      $(this).parent().hide();
    });
    
  }
  functionToDeleteItem(i) {
    this.phonebookArray.splice(i, 1)
  }

}
