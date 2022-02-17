import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginObject } from './interfaces/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  numero:number = 0

  sumar(){
    this.numero += 1
  }

  restar(){
    this.numero -= 1
  }
}
