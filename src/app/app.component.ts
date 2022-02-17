import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginObject } from './interfaces/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  @ViewChild('nombre', {static: false}) nombre:ElementRef | any
  @ViewChild('status', {static: false}) status:ElementRef | any

  show=false
  arrayData = [
    {nombre: 'Tobby',
      status: 'perro'},
      {
        nombre: 'Lua',
        status: 'gato'
      }

  ]

  addAnimal(nombre:string, status:string){
    this.arrayData.push({nombre, status})
    this.nombre.nativeElement.value = ''
    this.status.nativeElement.value = ''
    
  }

  resetear(){
   this.arrayData = []
  }
}
