import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form).toBeTruthy();
  });

  it('debe haber un campo input email',()=>{
   //// Assert
   expect(component.form.contains('email')).toBeTruthy()
  })

  it('el campo de email debe ser tipo email',()=>{
      // Arrange
      let email = component.form.get('email')

      //Act
      email?.setValue('manug@mailcom')
  
      // Assert
      expect(email?.valid).toBeTruthy()
  })

  it('debe haber un campo password',()=>{
      // Assert
      expect(component.form.contains('password')).toBeTruthy();
      // Todos los de arriba funcionan bien
  })

  it('el campo password debe tener entre 4 y 8 caracteres', ()=>{
    //Aquí nos imaginamos que va un tocho de código
    //FUNCIONA!!!

    // Arrange
    let password = component.form.get('password')

    // Act
    password?.setValue('123245');

    // Assert
    expect(password?.value.length).toBeGreaterThan(4) 
    expect(password?.value.length).toBeLessThan(8)
    // Este funciona

  })

  it('debe haber un botón que se llame enviar',()=>{
    const elementHtml:  HTMLElement = fixture.debugElement.nativeElement
    const botonElement = elementHtml.querySelector('#button')
    console.log(botonElement?.innerHTML);
    expect(botonElement?.innerHTML).toEqual('Enviar'); 
  })

  
});
