import { createAction, props } from '@ngrx/store';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';

export interface IUserProfileAction {
  id: number;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  otherNames?: string;
  phone?: string;
  email?: string;
  dateOfBirth?: string;
  genderName?: string;
  religionName?: string;
}


export const loadMyProfiles = createAction(
  '[MyProfile] Load MyProfiles'
);

export const loadMyProfilesSuccess = createAction(
  '[MyProfile] Load MyProfiles Success',
  props<{ data: IUserProfileAction }>()
);

export const loadMyProfilesFailure = createAction(
  '[MyProfile] Load MyProfiles Failure',
  props<{ error: any }>()
);

export const myProfileLogout = createAction(
  '[MyProfile] Log out'
);
