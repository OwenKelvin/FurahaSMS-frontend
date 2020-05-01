import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.inject(AuthenticationService);
    expect(service).toBeTruthy();
  });
  it('should have function "contactAdmin', () => {
    const service: AuthenticationService = TestBed.inject(AuthenticationService);
    expect(service.contactAdmin({email: 'some@valid.email'})).toBeTruthy();
  });
  it('should have function "resetPassword', () => {
    const service: AuthenticationService = TestBed.inject(AuthenticationService);
    expect(service.resetPassword({email: 'some@valid.email'})).toBeTruthy();
  });
  it('should have function "login', () => {
    const service: AuthenticationService = TestBed.inject(AuthenticationService);
    expect(service.login({
      username: 'some@valid.email', password: 'someValidPassword', rememberMe: true
    })).toBeTruthy();
  });
});
