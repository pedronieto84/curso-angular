import { Component, OnInit } from '@angular/core';
import { LoginObject } from './interfaces/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  show = true;
  mensaje = ''
  ngOnInit(){
    setInterval(()=>{
      this.mensaje += 'a'
    }, 1000)
  }
}
