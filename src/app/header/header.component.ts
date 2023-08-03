import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Dropdown :any;
  cartItems:any;
  constructor(public shop:ShoppingService) { 
  
    this.Dropdown = [
      { name: 'Profile', icons: 'person_outline', route: '/profile'},
      { name: 'Chat', icons: 'chat_bubble_outline', route: '/login'},
      { name: 'Help', icons: 'help_outline', route: '/profile'},
      { name: 'Lock', icons: 'lock_outline', route: '/profile'},
      { name: 'Logout', icons: 'keyboard_tab', route: '/profile'},
    ]
  }

  ngOnInit() {
    // this.shop.cart.map(ele=>this.cartItems+=ele.quantity);
  }

}
