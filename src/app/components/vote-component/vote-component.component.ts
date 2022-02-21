import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.scss']
})
export class VoteComponentComponent {

  votosTotales = 0


  subirVoto(){
    this.votosTotales +=1
  }

  bajarVoto(){
    this.votosTotales -=1
  }

}
