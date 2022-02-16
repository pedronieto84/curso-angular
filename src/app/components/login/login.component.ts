import { Component, Input, OnInit } from '@angular/core';
import { LoginObject } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() loginDataInput: LoginObject | undefined

}
