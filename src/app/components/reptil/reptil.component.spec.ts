import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptilComponent } from './reptil.component';

describe('ReptilComponent', () => {
  let component: ReptilComponent;
  let fixture: ComponentFixture<ReptilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReptilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
