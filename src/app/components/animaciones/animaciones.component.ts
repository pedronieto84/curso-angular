import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.scss']
  
})
export class AnimacionesComponent  {

  
 
  constructor(private data: DataService){

  }


  isOpen = true
  toggle(){
    this.isOpen = !this.isOpen
  }

}
