import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  
  constructor(private data: DataService){}

  getData(url:string){
    return this.data.getFromUrl(url)
  }
}
