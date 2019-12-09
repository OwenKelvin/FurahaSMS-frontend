import { createAction, props } from '@ngrx/store';
import { ToastStateInterface } from './../reducers/toast.reducer';
export const loadToastShows = createAction(
  '[ToastShow] Load ToastShows'
);

export const loadToastShowsSuccess = createAction(
  '[ToastShow] Load ToastShows Success',
  props<ToastStateInterface>()
);

export const loadToastShowsFailure = createAction(
  '[ToastShow] Load ToastShows Failure'
);
