import { createAction, props } from '@ngrx/store';

export interface IStudentProfileStateAction {
  id?: number;
  firstName?: string;
  lastName?: string;
  studentId?: number;
  middleName?: string;
  otherNames?: string;
  dateOfBirth?: string;
  religion?: string;
  gender?: string;
}

export const loadStudentProfileUpdates = createAction(
  '[StudentProfileUpdate] Load StudentProfileUpdates'
);

export const loadStudentProfileUpdatesSuccess = createAction(
  '[StudentProfileUpdate] Load StudentProfileUpdates Success',
  props<{ data: IStudentProfileStateAction}>()
);

export const loadStudentProfileUpdatesFailure = createAction(
  '[StudentProfileUpdate] Load StudentProfileUpdates Failure',
  props<IStudentProfileStateAction>()
);
