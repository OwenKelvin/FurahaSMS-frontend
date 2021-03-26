import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectMyProfileState, selectMyPermissions } from '../store/selectors/my-profile.selectors';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { loadMyProfiles } from '../store/actions/my-profile.actions';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  loadMyProfile$: Observable<any> = this.store.pipe(
    select(selectMyProfileState),
    tap((profile) => {
      if (profile && profile.id === 0) {
        this.store.dispatch(loadMyProfiles());
      }
    })
  );

  loadMyPermissions$ = this.store.pipe(
    select(selectMyPermissions)
  );
  constructor(
    private store: Store
  ) { }
}
