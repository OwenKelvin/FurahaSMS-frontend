import { createAction, props } from '@ngrx/store';

export const loadAdmissionss = createAction(
  '[Admissions] Load Admissionss'
);

export const loadAdmissionssSuccess = createAction(
  '[Admissions] Load Admissionss Success',
  props<{ data: any }>()
);

export const loadAdmissionssFailure = createAction(
  '[Admissions] Load Admissionss Failure',
  props<{ error: any }>()
);
