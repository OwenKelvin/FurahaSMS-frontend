import { TestBed, async, inject, waitForAsync } from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuthGuard', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGuard]
    });
  }));

  it('should create auth guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if current user ',
    inject([AuthGuard], (authGuard: AuthGuard) => {
      const next = jasmine.createSpyObj({queryParams: ''});
      const state = jasmine.createSpyObj({url: ''});
      const canActivate = {
        ...authGuard,
        router: {
          navigate: () => {
          }
        },
        authenticationService: {isLoggedInSubject: {value: true}},
        canActivate: authGuard.canActivate
      };
      expect(canActivate.canActivate(next, state)).toBeTruthy();
    }));
  it('should return false if no current user ',
    inject([AuthGuard], (authGuard: AuthGuard) => {
      const next = jasmine.createSpyObj({queryParams: ''});
      const state = jasmine.createSpyObj({url: ''});
      const canActivate = {
        ...authGuard,
        router: {
          navigate: () => ({
            then: () => {}
          })
        },
        authenticationService: {isLoggedInSubject: {value: false}},
        canActivate: authGuard.canActivate
      };
      expect(canActivate.canActivate(next, state)).toBeFalsy();
    }));
});
