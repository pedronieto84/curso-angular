import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    setInterval(()=>{
      this.valor = this.valor * 2
    }, 2000 )
  }

  valor = 2
}
