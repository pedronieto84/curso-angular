import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Defino un behavirSubject
  private origenMensaje = new BehaviorSubject<string>('');

  // Lo convierto a observable para que se pueda subscribir quien quiera desde cualquier componente y escuchar sus eventos.
  mensajeActual = this.origenMensaje.asObservable();

  // Este es el método que llamaremos desde cualquier componente para pasarle el nuevo mensaje a quienes escuchen al behaviorSubject
  cambiarMensaje(mensaje: string){
    console.log('data menasje', mensaje);
    
    this.origenMensaje.next(mensaje)
  }
}
