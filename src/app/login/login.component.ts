import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
  onSubmit(myform){
    console.log(myform);
     let email = myform.name1;
    let password = myform.password1;
  
    if (email === 'abc@gmail.com' && password === '1234'){
      this.router.navigate(['/dashboard']);
    }   
  }
}
