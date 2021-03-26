import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectMyProfileState } from '../store/selectors/my-profile.selectors';
import { Observable } from 'rxjs';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';

@Component({
  selector: 'app-my-profile-info',
  templateUrl: './my-profile-info.component.html',
  styleUrls: ['./my-profile-info.component.css']
})
export class MyProfileInfoComponent implements OnInit {
  profile$: Observable<IUserProfile>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.profile$ = this.store.pipe(select(selectMyProfileState));
  }

}
