import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ValidFormComponent } from './valid-form.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ValidFormComponent,
  },
];

@NgModule({
  declarations: [ValidFormComponent],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, CommonModule],
})
export class ValidFormModule {}
