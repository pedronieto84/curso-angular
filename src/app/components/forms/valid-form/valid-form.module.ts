import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ValidFormComponent } from './valid-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
const routes: Routes = [
  {
    path: '',
    component: ValidFormComponent,
  },
];

@NgModule({
  declarations: [ValidFormComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
  ],
})
export class ValidFormModule {}
