import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public fecha: any
    public hora:any
    fechaCompletada: any;

    constructor(){
        this.fecha = '';
        this.hora = '';
    }

    public campoFecha(fecha: any, hora: any){
        this.fecha = fecha;
        this.hora = hora;
        this.fechaCompletada = `${fecha} ${hora}`;
        console.log(this.fechaCompletada);
    }
    public campo(){
        console.log(this.fecha);
        console.log(this.hora)
        this.fechaCompletada = `${this.fecha} ${this.hora}`;
        console.log(this.fechaCompletada);
    }


}
