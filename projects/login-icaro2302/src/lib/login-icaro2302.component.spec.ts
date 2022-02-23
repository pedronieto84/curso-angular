import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIcaro2302Component } from './login-icaro2302.component';

describe('LoginIcaro2302Component', () => {
  let component: LoginIcaro2302Component;
  let fixture: ComponentFixture<LoginIcaro2302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIcaro2302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIcaro2302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
