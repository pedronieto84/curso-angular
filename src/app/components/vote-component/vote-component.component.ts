import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.scss']
})
export class VoteComponentComponent implements OnInit {

  form!:FormGroup

  constructor(public fb: FormBuilder){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      email: ['', [Validators.email, Validators.required] ]
 })
  }

}
