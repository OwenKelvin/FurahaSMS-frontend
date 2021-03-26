import {Action, createReducer, on} from '@ngrx/store';
import * as LibraryBookAuthorActions from '../actions/library-book-author.actions';

export const libraryBookAuthorsFeatureKey = 'libraryBookAuthors';

export interface State {
  id?: number;
  name: string;
  biography?: string;
}

export const initialState: State[] = [];

const libraryBookReducer = createReducer(
  initialState,

  on(LibraryBookAuthorActions.loadBookAuthors, state => state),
  on(LibraryBookAuthorActions.loadBookAuthorsSuccess, (_state, action) => action.data),
  on(LibraryBookAuthorActions.loadBookAuthorsSuccess, (state, _action) => state),
);

export const reducer = (state: State[] | undefined, action: Action) => libraryBookReducer(state, action);
