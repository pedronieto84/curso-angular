import { Component, OnInit } from '@angular/core';
import { LoginObject } from './interfaces/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginDataFromFather: LoginObject = {
    email:'pedro.nieto.sanchez@gmail.com',
    password: '123456'
  }
}
