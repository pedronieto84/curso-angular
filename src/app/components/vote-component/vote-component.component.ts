import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.scss']
})
export class VoteComponentComponent {

  
  totalVotes = 0

  constructor(){
  }


  subirVoto() {
    this.totalVotes +=1
  }


}
