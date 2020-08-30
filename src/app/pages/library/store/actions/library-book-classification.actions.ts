import {createAction, props} from '@ngrx/store';

export const loadBookClassifications = createAction(
  '[Library Book Classification] Load Classifications'
);

export const loadBookClassificationsSuccess = createAction(
  '[Library Book Classification] Load Classifications Success',
  props<{ data: any }>()
);

export const loadBookClassificationsFailure = createAction(
  '[Library Book Classification] Load Classifications Failure',
  props<{ error: any }>()
);
