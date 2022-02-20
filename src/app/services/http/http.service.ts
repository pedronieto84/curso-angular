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

  public httpSubmit(form:any){
    return new Promise((res,rej)=>{
      setTimeout(()=>{

        // aqui enviaría el objeto form al server en un http post

        const respuesta = true;
        respuesta ? res(true) : rej('Error en el http submit')
      }, 2000)
    })
  }
}
