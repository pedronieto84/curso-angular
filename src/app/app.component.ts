import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  animales = [
    'perro', 'gato', 'pajaro', 'leon'
  ]
  
  constructor(){}



  
}
