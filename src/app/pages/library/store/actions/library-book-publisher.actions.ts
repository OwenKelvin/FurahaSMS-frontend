import { createAction, props } from '@ngrx/store';

export const loadLibraryBookPublishers = createAction(
  '[Library Book Publishers] Load Publishers'
);

export const loadLibraryBookPublishersSuccess = createAction(
  '[Library Book Publishers] Load Publishers Success',
  props<{ data: any }>()
);

export const loadLibraryBookPublishersFailure = createAction(
  '[Library Book Publishers] Load Publishers Failure',
  props<{ error: any }>()
);
