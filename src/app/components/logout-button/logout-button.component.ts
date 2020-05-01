import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { myProfileLogout } from 'src/app/pages/my-profile/store/actions/my-profile.actions';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnDestroy {

  componentIsActive = true;

  constructor(
    private store: Store<fromStore.AppState>,
    private authService: AuthenticationService,
    private router: Router) { }

  logout() {
    const confirmedLogout = confirm('Are you sure you wish to logout?');
    if (confirmedLogout) {
      this.store.dispatch(myProfileLogout());
      // this.authService.logout()
      //   .pipe(takeWhile(() => this.componentIsActive))
      //   .subscribe(success => {
      //     if (success) {
      //       this.store.dispatch(loadToastShowsSuccess({
      //         showMessage: true,
      //         toastBody: 'Successfully logged out',
      //         toastHeader: 'Logged out',
      //         toastTime: 'Just Now'
      //       }));
      //     }
      //     this.router.navigate(['/']);
      //   });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}