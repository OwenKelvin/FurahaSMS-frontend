import { createAction, props } from '@ngrx/store';

export const loadLibraryBooks = createAction(
  '[LibraryBook] Load LibraryBooks'
);

export const loadLibraryBooksSuccess = createAction(
  '[LibraryBook] Load LibraryBooks Success',
  props<{ data: any[] }>()
);

export const loadLibraryBooksFailure = createAction(
  '[LibraryBook] Load LibraryBooks Failure',
  props<{ error: any }>()
);
