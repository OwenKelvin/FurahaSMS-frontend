import {Action, createReducer, on} from '@ngrx/store';
import * as LibraryBookPublisherActions from '../actions/library-book-publisher.actions';

export const libraryPublisherFeatureKey = 'libraryBookPublishers';

export interface State {
  [id: number]: {
    id?: number;
    name: string;
    description?: string;
  };
}

export const initialState: State = {
  0: {
    id: 0,
    name: '',
    description: ''
  }
};

const libraryPublisherReducer = createReducer(
  initialState,

  on(LibraryBookPublisherActions.loadLibraryBookPublishers, state => state),
  on(LibraryBookPublisherActions.loadLibraryBookPublishersSuccess, (state, action) => {
    const data: any = {};
    action.data.forEach(item => {
      data[item.id] = item;
    });
    return {...state, ...data};
  }),
  on(LibraryBookPublisherActions.loadLibraryBookPublishersFailure, (state, _action) => state),

  on(LibraryBookPublisherActions.loadLibraryBookPublisher, state => state),
  on(LibraryBookPublisherActions.loadLibraryBookPublisherSuccess, (state, action) => ({...state, [action.data.id]: {...action.data}})),
  on(LibraryBookPublisherActions.loadLibraryBookPublisherFailure, (state, _action) => state),


  on(LibraryBookPublisherActions.removeLibraryBookPublisher, (state, action) => {
    const amendedState = {...state};
    delete (amendedState[action.data.id]);
    return amendedState;
  }),
);

export const reducer = (state: State | undefined, action: Action) => libraryPublisherReducer(state, action);
