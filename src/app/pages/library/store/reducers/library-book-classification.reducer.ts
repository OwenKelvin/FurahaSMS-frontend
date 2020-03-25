import { Action, createReducer, on } from '@ngrx/store';
import * as LibraryBookClassificationActions from '../actions/library-book-classification.actions';

export interface State {
  id?: number;
  name: string;
  biography?: string;
}

export const initialState: State[] = [
  {
    id: 0,
    name: '',
    biography: '',
  }
];

const libraryBookClassificationReducer = createReducer(
  initialState,

  on(LibraryBookClassificationActions.loadBookClassifications, state => state),
  on(LibraryBookClassificationActions.loadBookClassificationsSuccess, (_state, action) => action.data),
  on(LibraryBookClassificationActions.loadBookClassificationsSuccess, (state, _action) => state),

);

export function reducer(state: State[] | undefined, action: Action) {
  return libraryBookClassificationReducer(state, action);
}
