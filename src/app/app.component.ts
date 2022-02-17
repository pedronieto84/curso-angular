import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
      this.router.navigate([url, url2], {
        queryParams: {
          tipo: 'mamifero',
          patas: '4',
        }
      });
    
  }
}
