import { Action, createReducer, on } from '@ngrx/store';
import * as LibraryBookAuthorActions from '../actions/library-book-author.actions';

export interface State {
  id?: number;
  name: string;
  biography?: string;
}

export const initialState: State[] = [];

const libraryBookReducer = createReducer(
  initialState,

  on(LibraryBookAuthorActions.loadBookAuthors, state => state),
  on(LibraryBookAuthorActions.loadBookAuthorsSuccess, (state, action) => action.data),
  on(LibraryBookAuthorActions.loadBookAuthorsSuccess, (state, action) => state),

);

export function reducer(state: State[] | undefined, action: Action) {
  return libraryBookReducer(state, action);
}
