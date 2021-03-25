import { createAction, props } from '@ngrx/store';

export const loadGuardianProfiles = createAction(
  '[GuardianProfile] Load GuardianProfiles',
  props<{ data: any }>()
);

export const loadGuardianProfilesSuccess = createAction(
  '[GuardianProfile] Load GuardianProfiles Success',
  props<{ data: any }>()
);

export const loadGuardianProfilesFailure = createAction(
  '[GuardianProfile] Load GuardianProfiles Failure',
  props<{ error: any }>()
);
