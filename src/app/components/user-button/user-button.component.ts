import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit, OnDestroy {
  componentIsActive: any;

  constructor(
    private store: Store<fromStore.AppState>,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.componentIsActive = true;
    const confirmedLogout = window.confirm('Are you sure you wish to logout?');
    if (confirmedLogout) {
      this.authService.logout()
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(success => {
        if (success) {
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: 'Successfully logged out',
            toastHeader: 'Logged out',
            toastTime: 'Just Now'
          }));
        }
        this.router.navigate(['/']);
      });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
