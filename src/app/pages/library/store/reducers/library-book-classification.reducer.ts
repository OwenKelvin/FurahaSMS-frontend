import { Action, createReducer, on } from '@ngrx/store';
import * as LibraryBookClassificationActions from '../actions/library-book-classification.actions';

export interface State {
  id?: number;
  name: string;
  biography?: string;
}

export const initialState: State[] = [];

const libraryBookClassificationReducer = createReducer(
  initialState,

  on(LibraryBookClassificationActions.loadBookClassifications, state => state),
  on(LibraryBookClassificationActions.loadBookClassificationsSuccess, (state, action) => action.data),
  on(LibraryBookClassificationActions.loadBookClassificationsSuccess, (state, action) => state),

);

export function reducer(state: State[] | undefined, action: Action) {
  return libraryBookClassificationReducer(state, action);
}
