import { createAction, props } from '@ngrx/store';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';

export const loadMyProfiles = createAction(
  '[MyProfile] Load MyProfiles'
);

export const loadMyProfilesSuccess = createAction(
  '[MyProfile] Load MyProfiles Success',
  props<{ data: IUserProfile }>()
);

export const loadMyProfilesFailure = createAction(
  '[MyProfile] Load MyProfiles Failure',
  props<{ error: any }>()
);
