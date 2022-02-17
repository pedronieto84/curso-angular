import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-animal',
  templateUrl: './detalle-animal.component.html',
  styleUrls: ['./detalle-animal.component.scss'],
})
export class DetalleAnimalComponent implements OnInit {
  animal!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params) => {
      console.log('queryParams', params);
    });
  }
}
