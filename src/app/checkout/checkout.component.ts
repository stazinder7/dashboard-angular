import { Component, OnInit } from '@angular/core';
import { fn } from '@angular/compiler/src/output/output_ast';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
declare var $;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  addresArray: any = [];
  steps: string = 'delivery';
  // email:any;
  // lname:any;
  // phone:any;
  // city:any;
  constructor() {



  }
  log(x) {
    console.log(x)
  }
  onSubmit(ngForm) {
    console.log(ngForm);
    let fname1 = ngForm.fname;
    let lname1 = ngForm.lname;
    let email1 = ngForm.email;
    let phone1 = ngForm.phone;
    let house1 = ngForm.house;
    let area1 = ngForm.area;
    let state1 = ngForm.state;
    let city1 = ngForm.city;
    this.addresArray.push({ fname1, lname1, email1, phone1, house1, area1, state1, city1 });
    console.log(this.addresArray)

  }
   ngOnInit() {
  //   $('.tabs').tabs();
  }

  goForward(place1?: string) {
    console.log(place1);
    this.steps='place-order';
  }
  goForward1(place1?: string) {
    console.log(place1);
    this.steps='complete-payment';
  }
  backward(place1?: string){
    this.steps='delivery';
  }
  backward1(place1?: string){
    this.steps='place-order';
  }
}
