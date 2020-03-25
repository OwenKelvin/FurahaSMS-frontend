import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../services/authentication.service';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from './../store/actions/toast-show.actions';
import { AppState } from './../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
      return true;
    }
    this.store.dispatch(loadToastShowsSuccess({
      toastHeader: 'Logged in',
      toastBody: 'Successfully authenticated!',
      showMessage: true,
      toastTime: 'Just Now'
    }));
    this.router.navigate(['/dashboard']);
    return false;
  }
}
