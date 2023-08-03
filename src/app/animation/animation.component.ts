import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('fade',[
      transition(' void => default',[
        style({backgroundColor:'yellow', opacity:0}),
        animate(2000, style({backgroundColor:'black', opacity:1}))
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  animate(){

  }
}
