import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss'],
})
export class ArrayFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private simulacionHttp: HttpService,
    private snackBar: MatSnackBar
  ) {}

  myForm!: FormGroup;
  phoneToBeDeleted!: any;

  ngOnInit(): void {
    this.phoneToBeDeleted = undefined;
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
    });
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  async addPhone() {
    const phone = this.fb.group({
      prefijo: [],
      numero: [],
    });

    this.phoneForms.push(phone);
    console.log('aqui hago la inserción a la base de datos mediante promesa');

    try {
      await this.simulacionHttp.httpCall(true);
      this.openSnackbar('Datos Recibidos correctamente', 'OK', 'success')
    } catch (e) {
      this.phoneForms.removeAt(this.phoneForms.length - 1);
      console.log('Respuesta negativa');
      this.openSnackbar('Error en la inserción', 'OK', 'danger')
    }
  }

  async deletePhone(i:number){
    this.phoneToBeDeleted = this.phoneForms.value[i]
    console.log('phone to delete', this.phoneToBeDeleted);
    this.phoneForms.removeAt(i)
    console.log('Aqui hago el delete de la base de datos mediante promise o observable')
    try {
      const respServer = await this.simulacionHttp.httpCallRemove(true)
      if(respServer){
        this.openSnackbar('Datos Eliminados correctamente', 'OK', 'success')
      }
    } catch (error) {
      this.openSnackbar('Error al eliminar datos', 'OK', 'error')
      console.log('this.phoneToBeDeleted', this.phoneToBeDeleted);
      const phone = this.fb.group({
        prefijo: this.phoneToBeDeleted.prefijo,
        numero: this.phoneToBeDeleted.numero
      })
      this.phoneForms.insert(i,phone)
    }
  }

  openSnackbar(message: string, action: string, estado:string){
    this.snackBar.open(
      message, action, {
        panelClass: estado, duration: 1000
      }
    )
  }
}
