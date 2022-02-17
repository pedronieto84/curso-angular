import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObject } from './interfaces/interfaces';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

 primerValor = 0
 segundoValor = 0

  
  capturar(primerValor: string, segundoValor:string){
    this.primerValor = parseInt(primerValor)
    this.segundoValor = parseInt(segundoValor)
  }
}
