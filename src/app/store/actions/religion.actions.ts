import { createAction, props } from '@ngrx/store';

export const loadReligions = createAction(
  '[Religion] Load Religions'
);

export const loadReligionsSuccess = createAction(
  '[Religion] Load Religions Success',
  props<{ data: any }>()
);

export const loadReligionsFailure = createAction(
  '[Religion] Load Religions Failure',
  props<{ error: any }>()
);
