import { Action, createReducer, on } from '@ngrx/store';
import * as LibraryBookPublisherActions from '../actions/library-book-publisher.actions';

export interface State {
  id?: number;
  name: string;
  description?: string;
}

export const initialState: State[] = [];

const libraryPublisherReducer = createReducer(
  initialState,

  on(LibraryBookPublisherActions.loadLibraryBookPublishers, state => state),
  on(LibraryBookPublisherActions.loadLibraryBookPublishersSuccess, (state, action) => action.data),
  on(LibraryBookPublisherActions.loadLibraryBookPublishersFailure, (state, action) => state),

);

export function reducer(state: State[] | undefined, action: Action) {
  return libraryPublisherReducer(state, action);
}
