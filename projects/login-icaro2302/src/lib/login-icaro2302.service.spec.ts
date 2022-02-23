import { TestBed } from '@angular/core/testing';

import { LoginIcaro2302Service } from './login-icaro2302.service';

describe('LoginIcaro2302Service', () => {
  let service: LoginIcaro2302Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginIcaro2302Service);
  });

  it('should be created lib login', () => {
    expect(service).toBeTruthy();
  });
});
