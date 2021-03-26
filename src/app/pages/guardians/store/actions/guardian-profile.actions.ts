import { createAction, props } from '@ngrx/store';
import {IUserProfile} from '../../../../interfaces/user-profile.interface';

export const loadGuardianProfiles = createAction(
  '[GuardianProfile] Load GuardianProfiles',
  props<{ data: IUserProfile }>()
);

export const loadGuardianProfilesSuccess = createAction(
  '[GuardianProfile] Load GuardianProfiles Success',
  props<{ data: IUserProfile }>()
);

export const loadGuardianProfilesFailure = createAction(
  '[GuardianProfile] Load GuardianProfiles Failure',
  props<{ error: any }>()
);
