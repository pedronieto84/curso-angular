import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  myForm!: FormGroup;
  jobs = ['Doctor', 'Profesor', 'Bombero'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      mensaje: '',
      profesion: ['Doctor'],
    });

    this.myForm.valueChanges.subscribe(console.log);
  }
}
