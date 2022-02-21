import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.scss']
})
export class VoteComponentComponent implements OnInit {

  form!:FormGroup
  totalVotes = 0
  @Output() cambioVotos: EventEmitter<number> = new EventEmitter<number>() 

  constructor(public fb: FormBuilder){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      email: ['', [Validators.email, Validators.required] ]
 })
  }

  subirVoto() {
    this.totalVotes +=1
    this.cambioVotos.emit(this.totalVotes)
  }

  bajarVoto(){
    this.totalVotes -=1
    this.cambioVotos.emit(this.totalVotes)
  }



}
