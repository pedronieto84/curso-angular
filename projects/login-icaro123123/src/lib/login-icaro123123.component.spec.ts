import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIcaro123123Component } from './login-icaro123123.component';

describe('LoginIcaro123123Component', () => {
  let component: LoginIcaro123123Component;
  let fixture: ComponentFixture<LoginIcaro123123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIcaro123123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIcaro123123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
