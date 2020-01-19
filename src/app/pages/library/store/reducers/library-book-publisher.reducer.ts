import { Action, createReducer, on } from '@ngrx/store';
import * as LibraryBookPublisherActions from '../actions/library-book-publisher.actions';

export interface State {
  id?: number,
  name: string,
  description?: string
}

export const initialState: State[] = [];

const libraryPublisherReducer = createReducer(
  initialState,

  on(LibraryBookPublisherActions.loadLibraryBookPublishers, state => state),
  on(LibraryBookPublisherActions.loadLibraryBookPublishersSuccess, (state, action) => {
    if (state.length > 0) {
      return state
    }
    return action.data
  }),
  on(LibraryBookPublisherActions.loadLibraryBookPublishersFailure, (state, action) => state),

);

export const reducer = (state: State[] | undefined, action: Action) => {
  return libraryPublisherReducer(state, action);
}
