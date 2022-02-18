import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './components/animales/animales.component';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { PreloadGuard } from './guards/preload.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'animales',
    component: AnimalesComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: ':nombre',
        component: DetalleAnimalComponent,
        resolve: [PreloadGuard]
      },
    ],
  },
  
  {
    path: '**',
    redirectTo: '/',
  }, // Cuidado con no poner esto al final porque puede dar error
]; // Aquí definimos las rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)], // aquí le pasamos las rutas definidas en el array
  exports: [RouterModule],
})
export class AppRoutingModule {}
