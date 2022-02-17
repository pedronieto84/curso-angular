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

  dataObservable$: Observable<string>;

  constructor(private data: DataService){
    this.dataObservable$ = this.data.mensajeActual
  }

  
  cambiarMensaje(mensaje:string){
    this.data.cambiarMensaje(mensaje)
  }
}
