import { TestBed } from '@angular/core/testing';

import { LoginIcaro123123Service } from './login-icaro123123.service';

describe('LoginIcaro123123Service', () => {
  let service: LoginIcaro123123Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginIcaro123123Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
