import { createAction, props } from '@ngrx/store';
import {IUserProfile} from '../../../../interfaces/user-profile.interface';

export const loadTeacherProfiles = createAction(
  '[TeacherProfile] Load TeacherProfiles',
  props<{ data: { id: number } }>()
);

export const loadTeacherProfilesSuccess = createAction(
  '[TeacherProfile] Load TeacherProfiles Success',
  props<{ data: IUserProfile }>()
);

export const loadTeacherProfilesFailure = createAction(
  '[TeacherProfile] Load TeacherProfiles Failure',
  props<{ error: any }>()
);
