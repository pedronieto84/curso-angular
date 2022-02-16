import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  etiquetaQueVaCambiando = ''

  ngOnInit(): void {
    setInterval(()=>{
      this.etiquetaQueVaCambiando += 'a'
    },1000)
  }

  logNombre(nombre: any){
    console.log(nombre);
  }
}
