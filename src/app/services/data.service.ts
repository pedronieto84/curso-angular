import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { 
  }

  getFromUrl(url:string){
    this.http.get(url).subscribe((res)=>{
        console.log(res);
    })
  }
}
