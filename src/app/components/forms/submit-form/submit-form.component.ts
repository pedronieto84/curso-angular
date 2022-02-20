import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  myForm!: FormGroup

  loading = false
  success = false
  error = false


  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
  }

  async submitHandler(){
    this.loading = true
    const formValue = this.myForm.value
    try{
      const response = await this.http.httpSubmit(formValue)
      if(response) this.success = true
    }catch(e){

      this.error = true

    }
    this.loading = false
  }

}
