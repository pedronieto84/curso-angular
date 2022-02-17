import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-animal',
  templateUrl: './detalle-animal.component.html',
  styleUrls: ['./detalle-animal.component.scss'],
})
export class DetalleAnimalComponent implements OnInit, OnDestroy {
  animal!: string;
  constructor(private route: ActivatedRoute, private routeServ: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.route.url.subscribe((params) => {
      console.log('queryParams', params);
      console.log('full url', this.routeServ.url);
    });

    // Porfavor fíjate que el componente no se destruye ni se reconstruye. Lo único que cambia es la url. Eso nos obliga a programar de una forma concreta.

  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }


}
