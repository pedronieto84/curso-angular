import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './components/animales/animales.component';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { MamiferoComponent } from './components/mamifero/mamifero.component';
import { ReptilComponent } from './components/reptil/reptil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'animales',
    component: AnimalesComponent,
    children: [
      {
        path: ':nombre',
        component: DetalleAnimalComponent,
      },
    ],
  },
  {
    path: '**',
    component: ErrorComponent,
  }, // Cuidado con no poner esto al final porque puede dar error
]; // Aquí definimos las rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)], // aquí le pasamos las rutas definidas en el array
  exports: [RouterModule],
})
export class AppRoutingModule {}
