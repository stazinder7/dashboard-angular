import { Component, OnInit ,AfterViewInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit ,AfterViewInit {
  navItems: any;
  Nav :any;
  constructor() {
    this.navItems=['Modern', 'eCommerce', 'Analytics'];
    this.Nav = [
      { name: 'Dashboard', icons: 'settings_input_svideo', subList: ['Modern', 'eCommerce', 'Analytics'], route: '/dashboard'},
      { name: 'Template', icons: 'dvr', route: '/profile1'},
      { name: 'Mail', icons: 'mail_outline', route: '/profile2'},
      { name: 'ToDo', icons: 'chat_bubble_outline', route: '/phonebook'},
      { name: 'Contacts', icons: 'import_contacts' , route: '/profile'},
      { name: 'Calendar', icons: 'today', subList: ['Modern1', 'eCommerce1', 'Analytics1'], route: '/profile5'},
      { name: 'eCommerce', icons: 'add_shopping_cart' , route: '/ecom'},
      { name: 'Contact', icons: 'email' , route: '/contact'},
    
    ]
   }
 

  ngOnInit() {
    
  }
  ngAfterViewInit(){
      $('.tabs').tabs();
      $('.collapsible').collapsible();
      $('.collapsible-body').hide();
      $('.side-nav li a').click(function(){
        $('.side-nav li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.navbar-toggler').click(function(){
        $('body').toggleClass('menu-collapsed');
      });
      $('.dropdown-trigger').dropdown();
  
  }

}
