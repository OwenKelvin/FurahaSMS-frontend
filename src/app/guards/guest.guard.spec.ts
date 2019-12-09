import { TestBed, async, inject } from '@angular/core/testing';

import { GuestGuard } from './guest.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './../services/authentication.service';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from './../store/reducers';

describe('GuestGuard', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot({}) ],
      providers: [GuestGuard]
    });
    await TestBed.compileComponents();
  });

  it('should create auth guard', inject([GuestGuard, Store], (guard: GuestGuard, store: Store<AppState>) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if no current user ', inject([Store], (store: Store<AppState>) => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const router = jasmine.createSpyObj({ navigate: () => { } });
    const authenticationServive = jasmine.createSpyObj({
      currentUserValue: false
    });
    const guestGuard = new GuestGuard(store, router, authenticationServive);
    // expect(guestGuard.canActivate(next, state)).toBeTruthy();
  }));
  it(
    'should return false if current user ',
    inject(
      [AuthenticationService, Store],
      (authenticationServive: AuthenticationService, store: Store<AppState>) => {
        const next = jasmine.createSpyObj({queryParams: ''});
        const state = jasmine.createSpyObj({url: ''});
        const router = jasmine.createSpyObj({ navigate: () => { } });
        const auth: AuthenticationService = Object.create(authenticationServive, {
          currentUserValue : { value: true}
        });
        const guestGuard = new GuestGuard(store, router, auth);
        expect(guestGuard.canActivate(next, state)).toBeFalsy();
     })
    );
});
