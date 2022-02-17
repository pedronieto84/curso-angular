import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './components/animales/animales.component';
import { HomeComponent } from './components/home/home.component';
import { MamiferoComponent } from './components/mamifero/mamifero.component';
import { ReptilComponent } from './components/reptil/reptil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animales', component: AnimalesComponent,
  children:[
      {
          path: 'mamifero',
          component: MamiferoComponent
      },
      {
          path: 'reptil',
          component: ReptilComponent
      }
  
  ]
},
]; // Aquí definimos las rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)], // aquí le pasamos las rutas definidas en el array
  exports: [RouterModule],
})
export class AppRoutingModule {}
