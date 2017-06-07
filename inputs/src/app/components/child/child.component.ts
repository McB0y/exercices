import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

//If I wanna passs input data from a father component,
// I  would it this way...
@Input() title: string;
@Input('name') other: string;
  constructor() {

   }

  ngOnInit() {
  }

}
