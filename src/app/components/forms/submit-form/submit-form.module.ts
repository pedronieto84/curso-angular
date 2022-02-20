import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { SubmitFormComponent } from './submit-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SubmitFormComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SubmitFormModule { }
