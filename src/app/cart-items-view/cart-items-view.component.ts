import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-cart-items-view',
  templateUrl: './cart-items-view.component.html',
  styleUrls: ['./cart-items-view.component.css']
})
export class CartItemsViewComponent implements OnInit {

  carthead:any;
  total_price:any;
  constructor(public shop:ShoppingService) { 
    this.carthead=['S.no','Product Id','Product','Color','Category','Quantity','Price','Total Price']
    
  }
  title="cart Items";
  ngOnInit() {
    console.log("shop array:"+ this.shop.cart)
  }
  counter(val,i){
    console.log(val.value);
    console.log("dfdsfsd",this.shop.cart[i].pro_price)
    this.shop.cart[i]['total_price']  = Number(this.shop.cart[i].pro_price * val.value);
    console.log("wedqw"+this.shop.cart[i].pro_price )
    console.log("total price" + this.shop.cart[i]['total_price'])
  }


}
