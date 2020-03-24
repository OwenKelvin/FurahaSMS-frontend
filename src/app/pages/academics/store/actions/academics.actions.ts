import { createAction, props } from '@ngrx/store';

export const loadAcademics = createAction(
  '[Academics] Load Academics'
);

export const loadAcademicsSuccess = createAction(
  '[Academics] Load Academics Success',
  props<{ data: any }>()
);

export const loadAcademicsFailure = createAction(
  '[Academics] Load Academics Failure',
  props<{ error: any }>()
);
