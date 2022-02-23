import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login-icaro2302',
  template: `
    <div>
      Email 4<input #email type="text" >
      Password<input #password type="password" >
      <button (click)="enviar(email.value, password.value)">ENVIAR</button>
</div>
  `,
  styles: [
  ]
})
export class LoginIcaro2302Component  {

  nombre = 'juan'
  enviar(email:string, password:string){
    console.log(email, password);
  }
  

}
