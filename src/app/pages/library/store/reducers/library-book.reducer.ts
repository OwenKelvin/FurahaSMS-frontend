import {Action, createReducer, on} from '@ngrx/store';
import * as LibraryBookActions from '../actions/library-book.actions';

export const libraryBookFeatureKey = 'libraryBooks';

export interface State {
  [id: number]: {
    id?: number;
    name?: string;
  };
}

export const initialState: State = {
  0: {
    id: 0
  }
};

const libraryBookReducer = createReducer(
  initialState,

  on(LibraryBookActions.loadLibraryBooks, state => state),
  on(LibraryBookActions.loadLibraryBooksSuccess, (state, action) => {
    const data: any = {};
    action.data.forEach(element => {
      data[element.id] = element;
    });

    return {
      ...state, ...data
    };
  }),
  on(LibraryBookActions.loadLibraryBooksFailure, (state, _action) => state),
);

export const reducer = (state: State | undefined, action: Action) => libraryBookReducer(state, action);
