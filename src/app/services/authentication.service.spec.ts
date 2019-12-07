import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
  it('should have function "contactAdmin', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service.contactAdmin({email: 'some@valid.email'})).toBeTruthy();
  });
  it('should have function "resetPassword', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service.resetPassword({email: 'some@valid.email'})).toBeTruthy();
  });
});
