import { Component, EventEmitter, Output } from '@angular/core';
import { LoginObject } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() eventoDesdeHijo =  new EventEmitter<LoginObject>()
  
  enviarPadre(email:string, password:string){
      this.eventoDesdeHijo.emit({email, password})
  }

}
