import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
const routes: Routes = [
  {
    path: '',
    component: BasicFormComponent
  }
];

@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class BasicFormModule { }
