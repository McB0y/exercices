import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <component-child [title]="title" [name]="name" [power]="powers[i]" *ngFor="let power of powers; let i = index;">
  </component-child>
  `
})
export class AppComponent {

    private title: string;
    private name: string;
    private powers: string[];

    constructor(){
        this.title = 'My destiny';
        this.name = "Rafael"
        this.powers = ['Super force', 'fly', 'fire bender', 'Laser rays']
    }



}
