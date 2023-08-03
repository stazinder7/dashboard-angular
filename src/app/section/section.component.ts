import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  resultantArray = [];
  pageArray:string[]=[]
   current = 1;

  title = 'Welcome to my Dashboard';
  todaydate = new Date();
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  mytable = ["Name", "Position", "Office", "Age", "Start date", "Action"]
  mytable1 = [
    { Name: 'Thor1', Position: 'Developer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Jennifer Acosta', Position: 'Junior Javascript Developer', Office: 'New York', Age: '61', StartDate: '2013/02/01', Action: 'Delete' },
    { Name: 'Haley Kennedy', Position: 'Senior Marketing Designer', Office: 'London', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Brielle Williamson', Position: 'Integration Specialist', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Michael Silva', Position: 'Marketing Designer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Bradley Greer', Position: 'Software Engineer', Office: 'London', Age: '61', StartDate: '2012/10/13', Action: 'Delete' },
    { Name: 'Thor2', Position: 'Developer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Jennifer Acosta', Position: 'Junior Javascript Developer', Office: 'New York', Age: '61', StartDate: '2013/02/01', Action: 'Delete' },
    { Name: 'Haley Kennedy', Position: 'Senior Marketing Designer', Office: 'London', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Brielle Williamson', Position: 'Integration Specialist', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Michael Silva', Position: 'Marketing Designer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Bradley Greer', Position: 'Software Engineer', Office: 'London', Age: '61', StartDate: '2012/10/13', Action: 'Delete' },
    { Name: 'Thor3', Position: 'Developer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Jennifer Acosta', Position: 'Junior Javascript Developer', Office: 'New York', Age: '61', StartDate: '2013/02/01', Action: 'Delete' },
    { Name: 'Haley Kennedy', Position: 'Senior Marketing Designer', Office: 'London', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Brielle Williamson', Position: 'Integration Specialist', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Michael Silva', Position: 'Marketing Designer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Bradley Greer', Position: 'Software Engineer', Office: 'London', Age: '61', StartDate: '2012/10/13', Action: 'Delete' },
    { Name: 'Thor4', Position: 'Developer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Jennifer Acosta', Position: 'Junior Javascript Developer', Office: 'New York', Age: '61', StartDate: '2013/02/01', Action: 'Delete' },
    { Name: 'Haley Kennedy', Position: 'Senior Marketing Designer', Office: 'London', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Brielle Williamson', Position: 'Integration Specialist', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Michael Silva', Position: 'Marketing Designer', Office: 'New York', Age: '61', StartDate: '2013/08/11', Action: 'Delete' },
    { Name: 'Bradley Greer', Position: 'Software Engineer', Office: 'London', Age: '61', StartDate: '2012/10/13', Action: 'Delete' }
  ]
  widgets = [
    { widIcons: 'add_shopping_cart', widContValue: '600', widContText: 'New', widOverviewText: 'Orders', widOverviewValue: '6,00,000' },
    { widIcons: 'perm_identity', widContValue: '1885', widContText: 'New', widOverviewText: 'Clients', widOverviewValue: '1,12,900' },
    { widIcons: 'timeline', widContValue: '80%', widContText: 'Growth', widOverviewText: 'Sales', widOverviewValue: '3,42,230' },
    { widIcons: 'attach_money', widContValue: '$890', widContText: 'Today', widOverviewText: 'Profit', widOverviewValue: '$25,000' }
  ]

  constructor() { }
  tt = false;
  myclick(event) {
    alert(event);
    console.log(event)
  }
  funchange(event) {
    alert(event);
    console.log(event)
    this.tt = false
  }
 
  pagelength(e:any){
    this.resultantArray = this.mytable1.slice(0,e.target.value);
  }

  ngOnInit() {
    this.resultantArray = this.mytable1.slice(0,5);
    let number = this.mytable1.length;
    console.log("aaray lenth is"  + number);
    let pagno = Math.ceil(this.mytable1.length / 5);
    
    for (let i = 1; i <= pagno; i++) {
      this.pageArray.push(i.toString());
  }

  }

  pageclick(pageNo){
    this.resultantArray=this.mytable1.slice((pageNo-1)*5, (pageNo*5));
    this.current = pageNo;
    console.log(pageNo);
  }
 
  incrementpage(){
    this.resultantArray=this.mytable1.slice((this.current*5), (this.current + 1)*5);
    this.current += 1;
  }
  decrementpage(pageNo){
    this.resultantArray=this.mytable1.slice((this.current-1)*5, (this.current*5));
    this.current -= 1;
  }
 
}
