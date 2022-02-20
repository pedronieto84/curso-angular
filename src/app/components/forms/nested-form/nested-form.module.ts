import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { NestedFormComponent } from './nested-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
const routes: Routes = [
  {
    path: '',
    component: NestedFormComponent
  }
];


@NgModule({
  declarations: [NestedFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class NestedFormModule { }
