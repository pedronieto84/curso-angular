import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-detalle-animal',
  templateUrl: './detalle-animal.component.html',
  styleUrls: ['./detalle-animal.component.scss'],
})
export class DetalleAnimalComponent implements OnInit {
  animal$!: Observable<any>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.animal$ = this.route.data;
  }
}
