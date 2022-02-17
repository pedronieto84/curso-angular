import { AfterViewInit, Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAumentar]'
})
export class AumentarDirective implements AfterViewInit {
  
  @Input() defaultColor!:string;
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  ngAfterViewInit(){
    console.log('afterViewInit');
    this.borderColor = this.defaultColor
  }

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}
