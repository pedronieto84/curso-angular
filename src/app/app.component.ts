import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginObject } from './interfaces/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  items = ['a','b', 'c', 'd']
}
