import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { MyProfileService } from '../../my-profile/services/my-profile.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-password-management',
  templateUrl: './password-management.component.html',
  styleUrls: ['./password-management.component.css']
})
export class PasswordManagementComponent {

  userProfileId$ = this.route.parent?.parent?.paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  myProfileId$ = this.myProfileService.loadMyProfile$.pipe(
    map((profile) => profile.id)
  );

  isMyProfile$ = combineLatest([this.userProfileId$, this.myProfileId$]).pipe(
    map(([userProfileId, myProfileId]: any[]) => (userProfileId === myProfileId) || !(userProfileId)),
    map(truthy => ({ truthy })),
  );

  constructor(
    private route: ActivatedRoute,
    private myProfileService: MyProfileService
  ) { }


}
