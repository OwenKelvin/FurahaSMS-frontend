import { createAction, props } from '@ngrx/store';
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
  studentId?: string | number;
}

export const loadStudentProfiles = createAction(
  '[StudentProfile] Load StudentProfiles',
  props<{ data: {id: number} }>()
);

export const loadStudentProfilesSuccess = createAction(
  '[StudentProfile] Load StudentProfiles Success',
  props<{ data: IUserProfileAction }>()
);

export const loadStudentProfilesFailure = createAction(
  '[StudentProfile] Load StudentProfiles Failure',
  props<{ error: any }>()
);
