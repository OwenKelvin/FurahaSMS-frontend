import { TestBed, async, inject } from '@angular/core/testing';

import { GuestGuard } from './guest.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './../services/authentication.service';

describe('GuestGuard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [GuestGuard]
    });
  }));

  it('should create auth guard', inject([GuestGuard], (guard: GuestGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if no current user ', () => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const router = jasmine.createSpyObj({ navigate: () => { } });
    const authenticationServive = jasmine.createSpyObj({
      currentUserValue: false
    });
    const guestGuard = new GuestGuard(router, authenticationServive);
    // expect(guestGuard.canActivate(next, state)).toBeTruthy();
  });
  it('should return false if current user ', inject([AuthenticationService], (authenticationServive: AuthenticationService) => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const router = jasmine.createSpyObj({ navigate: () => { } });
    const auth: AuthenticationService = Object.create(authenticationServive, {
      currentUserValue : { value: true}
    });
    const guestGuard = new GuestGuard(router, auth);
    expect(guestGuard.canActivate(next, state)).toBeFalsy();
  }));
});
