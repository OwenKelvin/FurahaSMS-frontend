import { createAction, props } from '@ngrx/store';

export const loadBookAuthors = createAction(
  '[Library Book Author] Load Authors'
);

export const loadBookAuthorsSuccess = createAction(
  '[Library Book Author] Load Authors Success',
  props<{ data: any }>()
);

export const loadBookAuthorsFailure = createAction(
  '[Library Book Author] Load Authors Failure',
  props<{ error: any }>()
);
