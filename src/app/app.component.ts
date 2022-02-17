import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  animales = ['perro', 'gato', 'pajaro', 'leon'];

  constructor(private router: Router) {}
 // Router es para navegar programáticamente
 
  navegar(url: string, url2: string) {
    const confirmar = prompt('Password?');
    const password = 1234;
    if (confirmar === password.toString()) {
      this.router.navigate([url, url2]);
    } else {
      return;
    }
  }
}
