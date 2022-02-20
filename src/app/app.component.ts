import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component } from '@angular/core';
import { HttpService } from './services/http/http.service';

interface RouteObject  {
  url:string
  displayName:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  email!:string
  password!:string
  emailInvalido = false;
  passwordInvalido = false;
  

  constructor(private http: HttpService){

  }

  enviar(email:string, password:string){
    console.log(email, password);
    // Enviar al servidor en el metodo definido en el servicio
    // this.http.sendServer(this.email, this.password) ... por ejemplo
  }
}
