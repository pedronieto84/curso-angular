import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.scss']
})
export class ValidFormComponent implements OnInit {

  myForm!: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^.{4,8}$')
      ]],
      edad: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ]],
      OK:[ false, [Validators.requiredTrue] ]
    })
  }
  
    get email() { return this.myForm.get('email')}
  
    get password() { return this.myForm.get('password')}
  
    get edad() { return this.myForm.get('edad')}
  
    get agree() { return this.myForm.get('OK')}
  
}
