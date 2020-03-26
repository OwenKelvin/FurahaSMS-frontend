import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profile$: Observable<IUserProfile>;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.profile$ = this.authService.currentUserProfile$;
  }

}
