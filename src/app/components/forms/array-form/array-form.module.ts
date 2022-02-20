import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFormComponent } from './array-form.component';
import { Routes , RouterModule} from '@angular/router'
import { MatSnackBarModule} from  '@angular/material/snack-bar'
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ArrayFormComponent
  }
];

@NgModule({
  declarations: [ArrayFormComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArrayFormModule { }
