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

  post(url:string){
    this.http.post(url, {data: 'dataOnBOdy'}).subscribe((res)=>{
        console.log(res);
    })
  }

  update(url:string){
    this.http.put(url, { data: 'dataToUpdate' }).subscribe((res)=>{
        console.log(res);
    })
  }

  delete(url:string){
    this.http.delete(url).subscribe((res)=>{
        console.log(res);
    })
  }

  
}
