import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponentComponent } from './vote-component.component';

describe('VoteComponentComponent', () => {
  let component: VoteComponentComponent;
  let fixture: ComponentFixture<VoteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteComponentComponent ]
    })
    .compileComponents();
  });
 // Función de Jasmine que se llama antes de cada función. Deberíamos usarlo para resetear las variables.
  beforeEach(() => {
    // Arrange (esto es cómo instanciar una clase)
    fixture = TestBed.createComponent(VoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe aumentar votos', () => {
    // Act
    component.subirVoto()

    // Assert
    expect(component.votosTotales).toBe(1)
  })

  it('debe decrementar votos', () => {
    // Act
    component.bajarVoto()

    // Assert
    expect(component.votosTotales).toBe(-1)
  })
});


