import { createAction, props } from '@ngrx/store';

export const loadGenders = createAction(
  '[Gender] Load Genders'
);

export const loadGendersSuccess = createAction(
  '[Gender] Load Genders Success',
  props<{ data: any }>()
);

export const loadGendersFailure = createAction(
  '[Gender] Load Genders Failure',
  props<{ error: any }>()
);
