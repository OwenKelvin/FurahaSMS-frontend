import { createAction, props } from '@ngrx/store';
import { StudentProfileStateInterface } from '../reducers/student-profile-update.reducer';

export const loadStudentProfileUpdates = createAction(
  '[StudentProfileUpdate] Load StudentProfileUpdates'
);

export const loadStudentProfileUpdatesSuccess = createAction(
  '[StudentProfileUpdate] Load StudentProfileUpdates Success',
  props<StudentProfileStateInterface>()
);

export const loadStudentProfileUpdatesFailure = createAction(
  '[StudentProfileUpdate] Load StudentProfileUpdates Failure',
  props<StudentProfileStateInterface>()
);
