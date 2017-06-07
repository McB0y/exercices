import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <component-child [title]="title" [name]="name"></component-child>
  `
})
export class AppComponent {

    private title: string;
    private name: string;

    constructor(){
        this.title = 'My destiny';
        this.name = "Rafael"
    }



}
