import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {MyProfileService} from '../../my-profile/services/my-profile.service';
import {combineLatest, EMPTY, Observable} from 'rxjs';

@Component({
  selector: 'app-password-management',
  templateUrl: './password-management.component.html',
  styleUrls: ['./password-management.component.css']
})
export class PasswordManagementComponent {

  userProfileId$: Observable<number> = this.route.parent?.parent?.paramMap.pipe(
    map(params => Number(params.get('id')))
  ) || EMPTY;

  myProfileId$: Observable<number> = this.myProfileService.loadMyProfile$.pipe(
    map((profile) => profile.id)
  );

  isMyProfile$: Observable<boolean> = combineLatest([this.userProfileId$, this.myProfileId$])
    .pipe(
      map(([userProfileId, myProfileId]) => (userProfileId === myProfileId) || !(userProfileId))
    );

  constructor(
    private route: ActivatedRoute,
    private myProfileService: MyProfileService
  ) {
  }
}
