import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public httpCall(respuesta:boolean){
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        respuesta ? res(true) : rej('error en la linea 14')
      }, 2000)
    }) 
  }

  public httpCallRemove(respuesta:boolean){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        respuesta ? res(true) : rej('error en la linea 24')
      },2000)
    })
  }
}
