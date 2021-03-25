import {TestBed, inject} from '@angular/core/testing';

import {GuestGuard} from './guest.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthenticationService} from '../services/authentication.service';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';

describe('GuestGuard', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })],
      providers: [reducerProvider, GuestGuard]
    });
    await TestBed.compileComponents();
  });

  it('should create auth guard', inject([GuestGuard, Store], (guard: GuestGuard, _store: Store<AppState>) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if no current user ', inject([
    Store, AuthenticationService], (store: Store<AppState>, authenticationService: AuthenticationService) => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const router = jasmine.createSpyObj({
      navigate: () => {
      }
    });

    spyOnProperty(authenticationService, 'currentUserValue').and.returnValue(false);
    const guestGuard = new GuestGuard(store, router, authenticationService);
    expect(guestGuard.canActivate(next, state)).toBeTruthy();
  }));
  it(
    'should return false if current user ',
    inject([GuestGuard], (guestGuard: GuestGuard) => {
      const next = jasmine.createSpyObj({queryParams: ''});
      const state = jasmine.createSpyObj({url: ''});
      const canActivate = {
        ...guestGuard,
        router: {
          navigate: () => ({
            then: () => {
            }
          })
        },
        authenticationService: {isLoggedInSubject: {value: true}},
        canActivate: guestGuard.canActivate
      };
      expect(canActivate.canActivate(next, state)).toBeFalsy();
    }));
});
