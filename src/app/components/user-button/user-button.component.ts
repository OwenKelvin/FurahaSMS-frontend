import { Component } from '@angular/core';
import { MyProfileService } from 'src/app/pages/my-profile/services/my-profile.service';


@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent {
  constructor(
    private myProfileService: MyProfileService
  ) { }
  
  user$ = this.myProfileService.loadMyProfile$;
}
