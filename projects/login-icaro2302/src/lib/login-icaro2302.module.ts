import { NgModule } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LoginIcaro2302Component } from './login-icaro2302.component';



@NgModule({
  declarations: [
    LoginIcaro2302Component,

  ],
  imports: [
    Ng2GoogleChartsModule
  ],
  exports: [
    LoginIcaro2302Component,
    
  ]
})
export class LoginIcaro2302Module { }
