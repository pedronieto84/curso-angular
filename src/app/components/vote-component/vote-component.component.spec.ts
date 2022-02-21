import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { VoteComponentComponent } from './vote-component.component';

describe('VoteComponentComponent', () => {
  let component: VoteComponentComponent;
  let fixture: ComponentFixture<VoteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteComponentComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });
  // Función de Jasmine que se llama antes de cada función. Deberíamos usarlo para resetear las variables.
  beforeEach(() => {
    // Arrange (esto es cómo instanciar una clase)
    
    fixture = TestBed.createComponent(VoteComponentComponent);

    // Act
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


  xit('debería crear un formulario con 2 controles', () => {

    // Arrange
    expect(component.form.contains('name')).toBeTruthy()
    expect(component.form.contains('email')).toBeTruthy()
  });

  xit('debería tener name control required', () => {

    // Act
    let name = component.form.get('name')
    name?.setValue('')

    // Assert
    expect(name?.valid).toBeFalsy()

  });

  xit('debería evaluar que email es un email', () => {

    // Act
    let email = component.form.get('email')
    email?.setValue('pedro@gmail.com')

    // Assert
    expect(email?.valid).toBeTruthy()

  });

  // Evaluar el event emitter
  xit('deberia subir el cambioVotos cuando se vota',  ()=>{
    // Event emitters son observables así que podemos subscribirnos
    // Arrange
    let totalVotes = null
    component.cambioVotos.subscribe(v => totalVotes = v)

    // Act
    component.subirVoto()

    // Assert
    expect(totalVotes).not.toBeNull()
  })
});
