import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Resolve,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, map, switchMap, timer, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadGuard implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const name = next.paramMap.get('name');
    //Con este name o id o lo que fuera haríamos la consulta a la base de datos para obtener la data
    // Aquí simplemente simularé con un timer

    return this.http.get('https://reqres.in/api/products/3').pipe( 

    delay(1000)
    )
  }
}
