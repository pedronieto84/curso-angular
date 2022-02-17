import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mensaje:string = ''

  constructor(private data :DataService) {

      
   }

   ngOnInit(){
     console.log('ngOnINit');
    this.data.mensajeActual.subscribe((mensaje)=>{
      console.log(mensaje);
      
      this.mensaje = mensaje
    })
   }

  

}
