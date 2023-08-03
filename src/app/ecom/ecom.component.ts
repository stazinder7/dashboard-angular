import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
declare var $;

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit {
  menuNumber: number = 0
  cat: any;
  proView: any;
  Product: any;
  actions: any;
  color: any;
  cartItems: any = [];
  pageArray: any = [];
  resultantProduct: [];
  current = 1;
  constructor(public shop: ShoppingService) {

    this.cat = [
      { name: 'watches', icons: 'watch' },
      { name: 'Tablets', icons: 'tablet_mac' },
      { name: 'Laptops', icons: 'laptop' },
      { name: 'Phone', icons: 'phone_iphone' },
    ]
    this.color = ['Grey', 'black', 'Gold', 'Blue', 'Green', 'Pink', 'Yellow']
    this.Product = [
      { pro_id: 'WTCH01', pr_col: 'Grey', pro_img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/cards/watch-2.png', pro_name: 'Smartwatch 2.0 LTE Wifi', pro_cat: 'watches', pro_des: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', pro_price: '399.00', old_Price: '499.00' , quantity:'1',total_price:'399.00' },
      { pro_id: 'MOB01', pr_col: 'Gold', pro_img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/cards/oneplus-6t.png', pro_name: 'OnePlus 6T', pro_cat: 'Phone', pro_des: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', pro_price: '499.00', trend: false, quantity:'1' ,total_price:'499.00'},
      { pro_id: 'TAB01', pr_col: 'black', pro_img: 'https://m.media-amazon.com/images/I/71TA+G6a6jL._AC_UL320_ML3_.jpg', pro_name: 'HP 14 Pentium Gold 14-inch Thin and Light Laptop (4GB/256GB SSD/Windows 10 Home/Jet Black/1.47 kg), 14q-cs0018TU', pro_cat: 'Laptops', pro_des: '14-inch Thin and Light Laptop (4GB/256GB SSD/Windows 10 Home/Jet Black/1.47 kg), 14q-cs0018TU', pro_price: '2399.00', trend: true , quantity:'1',total_price:'2399.00'},
      { pro_id: 'LAP02', pr_col: 'black', pro_img: 'https://m.media-amazon.com/images/I/51IqpNeYKPL._AC_UY545_FMwebp_QL65_.jpg', pro_name: 'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Gold', pro_cat: 'Tablets', pro_des: 'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Gold', pro_price: '1399.00', quantity:'1',total_price:'1399.00' },
      { pro_id: 'WTCH01', pr_col: 'Gold', pro_img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/cards/watch-2.png', pro_name: 'Smartwatch 2.0 LTE Wifi', pro_cat: 'watches', pro_des: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', pro_price: '399.00', old_Price: '' , quantity:'1',total_price:'399.00'},
      { pro_id: 'MOB02', pr_col: 'Grey', pro_img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/cards/oneplus-6t.png', pro_name: 'OnePlus 6T', pro_cat: 'Phone', pro_des: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', pro_price: '499.00', old_Price: '599.99', quantity:'1',total_price:'599.00' },
      { pro_id: 'TAB02', pr_col: 'black', pro_img: 'https://m.media-amazon.com/images/I/71TA+G6a6jL._AC_UL320_ML3_.jpg', pro_name: 'HP 14 Pentium Gold 14-inch Thin and Light Laptop (4GB/256GB SSD/Windows 10 Home/Jet Black/1.47 kg), 14q-cs0018TU', pro_cat: 'Laptops', pro_des: '14-inch Thin and Light Laptop (4GB/256GB SSD/Windows 10 Home/Jet Black/1.47 kg), 14q-cs0018TU', pro_price: '2399.00', old_Price: '' , quantity:'1',total_price:'2399.00'},
      { pro_id: 'LAP02', pr_col: 'black', pro_img: 'https://m.media-amazon.com/images/I/51IqpNeYKPL._AC_UY545_FMwebp_QL65_.jpg', pro_name: 'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Gold', pro_cat: 'Tablets', pro_des: 'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Gold', pro_price: '1399.00' , quantity:'1',total_price:'1399.00'},
      { pro_id: 'WTCH03', pr_col: 'Grey', pro_img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/cards/watch-2.png', pro_name: 'Smartwatch 2.0 LTE Wifi', pro_cat: 'watches', pro_des: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', pro_price: '399.00', old_Price: '', quantity:'1' ,total_price:'399.00'},
      { pro_id: 'MOB03', pr_col: 'black', pro_img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/cards/oneplus-6t.png', pro_name: 'OnePlus 6T', pro_cat: 'Phone', pro_des: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', pro_price: '499.00', old_Price: '', quantity:'1',total_price:'499.00' },
      { pro_id: 'TAB03', pr_col: 'Gold', pro_img: 'https://m.media-amazon.com/images/I/71TA+G6a6jL._AC_UL320_ML3_.jpg', pro_name: 'HP 14 Pentium Gold 14-inch Thin and Light Laptop (4GB/256GB SSD/Windows 10 Home/Jet Black/1.47 kg), 14q-cs0018TU', pro_cat: 'Laptops', pro_des: '14-inch Thin and Light Laptop (4GB/256GB SSD/Windows 10 Home/Jet Black/1.47 kg), 14q-cs0018TU', pro_price: '2399.00', old_Price: '', quantity:'1',total_price:'2399.00'},
      { pro_id: 'LAP03', pr_col: 'black', pro_img: 'https://m.media-amazon.com/images/I/51IqpNeYKPL._AC_UY545_FMwebp_QL65_.jpg', pro_name: 'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Gold', pro_cat: 'Tablets', pro_des: 'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Gold', pro_price: '1399.00' },
    ]
  }

  ngOnInit() {
    $('.modal').modal();
    $('[data-dismiss="alert"]').click(function () {
      $(this).parent().hide();
    });
    this.resultantProduct = this.Product.slice(0, 8);
    let number = this.Product.length;
    console.log(number);
    let pageNo = Math.ceil(number / 8);
    console.log("page number:" + pageNo);
    for (let i = 1; i <= pageNo; i++) {
      this.pageArray.push(i.toString());
    }
  }

  pageclick(pageNo) {
    this.resultantProduct = this.Product.slice((pageNo - 1) * 8, (pageNo * 8));
    this.current = pageNo;
    console.log(pageNo);
  }
  incrementpage() {
    this.resultantProduct = this.Product.slice((this.current * 5), (this.current + 1) * 5);
    this.current += 1;
  }
  decrementpage(pageNo) {
    this.resultantProduct = this.Product.slice((this.current - 1) * 5, (this.current * 5));
    this.current -= 1;
  }

  cat_filter(cat: any, index: number) {
    this.resultantProduct = this.Product.filter(ele => ele.pro_cat == cat);
    this.menuNumber = index;

  }
  col_filter(colors: any) {
    console.log(colors)
    this.resultantProduct = this.Product.filter(ele => ele.pr_col == colors);
  }
  add_cart(productItems) {
    console.log(productItems.pro_id);
    if (this.shop.cart && this.shop.cart.length) {
    let found= this.shop.cart.filter(car => car.pro_id == productItems.pro_id);
    if(found && found.length){
      found[0]['quantity']++;
      found[0]['total_price']  = Number(found[0].pro_price *  found[0]['quantity']);
    }else{
      this.shop.cart.push(productItems);
    }
    }
    else {
      this.shop.cart.push(productItems);
    }
console.log(this.shop.cart);

  }
  pro_view(productItems: any) {

    this.proView = productItems;
  }
}

