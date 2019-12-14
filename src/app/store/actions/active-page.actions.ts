import { createAction, props } from '@ngrx/store';
import { ActivePageStateInterface } from '../reducers/active-page.reducer';

export const loadActivePages = createAction(
  '[ActivePage] Load ActivePages'
);

export const loadActivePagesSuccess = createAction(
  '[ActivePage] Load ActivePages Success',
  props<ActivePageStateInterface>()
);

export const loadActivePagesFailure = createAction('[ActivePage] Load ActivePages Failure');
