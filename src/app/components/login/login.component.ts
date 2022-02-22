import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!:FormGroup
  email!: string;
  password!: string

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'email': ['', [ Validators.required, Validators.email ]],
      'password':['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  enviar(){
    this.email = this.form.value.email
    this.password = this.form.value.password

  }
}
