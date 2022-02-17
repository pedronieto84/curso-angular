import { Component, EventEmitter, Output } from '@angular/core';

import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private data: DataService){
  }

  enviarPadre(mensaje:string){
    console.log('enviarPadre');
    this.data.cambiarMensaje(mensaje)
  }


}
