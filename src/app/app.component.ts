import { Component, OnInit } from '@angular/core';
import { LoginObject } from './interfaces/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  capturarEventoDesdeElHijo(ev:LoginObject){
    console.log('evento Capturado desde el hijo',ev);
  }
}
