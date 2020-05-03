import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { myProfileLogout } from 'src/app/pages/my-profile/store/actions/my-profile.actions';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnDestroy {

  componentIsActive = true;

  constructor(
    private store: Store<fromStore.AppState>) { }

  logout() {
    const confirmedLogout = confirm('Are you sure you wish to logout?');
    if (confirmedLogout) {
      this.store.dispatch(myProfileLogout());
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}