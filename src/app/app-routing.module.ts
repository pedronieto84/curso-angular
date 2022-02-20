import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayFormComponent } from './components/forms/array-form/array-form.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { NestedFormComponent } from './components/forms/nested-form/nested-form.component';
import { SubmitFormComponent } from './components/forms/submit-form/submit-form.component';
import { ValidFormComponent } from './components/forms/valid-form/valid-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./components/forms/basic-form/basic-form.module').then((m => m.BasicFormModule))
  },
  {
    path: 'array',
    component: ArrayFormComponent,
  },
  {
    path: 'nested',
    component: NestedFormComponent,
  },
  {
    path: 'submit',
    component: SubmitFormComponent,
  },
  {
    path: 'valid',
    component: ValidFormComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
