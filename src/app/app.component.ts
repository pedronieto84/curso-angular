import { Component } from '@angular/core';

interface Persona {
  nombre: string
  apellido: string
  hijos: undefined| Persona
  edad: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  persona: Persona = {
    nombre: 'Pedro',
    apellido:'Nieto',
    hijos: undefined,
    edad: 39
  }

  restarleEdad(persona: Persona, edad: number){
    return persona.edad - edad
  }
}
