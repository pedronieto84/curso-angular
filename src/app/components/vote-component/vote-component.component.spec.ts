import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser'

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
    component = fixture.componentInstance; // Simula un componente
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar voto subido', ()=>{
    component.totalVotes = 10
    component.subirVoto()

    fixture.detectChanges() // Debo explicitamente angular que fuerce la detección de cambios

    let de = fixture.debugElement.query(By.css('.subirVoto')) // Encuentro el primer elmento que tenga esa clase

    let el:HTMLElement = de.nativeElement // Por algún motivo esta la ponen como any, y para tener intelissense, le decimos que es de tipo HTMLelement
    console.log(el.innerText);
    expect(el.innerText).toEqual('11' as any) // Si quito el any da un pequeño error de typado de interface, no se exactamente por que.

  })


});
