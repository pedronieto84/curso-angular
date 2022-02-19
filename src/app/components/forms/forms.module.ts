import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFormComponent } from './array-form/array-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';



@NgModule({
  declarations: [
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent
  ]
})
export class FormsModule { }