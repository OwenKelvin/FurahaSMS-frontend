import { Action, createReducer, on } from '@ngrx/store';
import { loadErrorMessagesSuccess, loadErrorMessagesFailure } from '../actions/error-message.actions';


export const errorMessageFeatureKey = 'errorMessage';

export interface ErrorMessageStateInterface {
  show: boolean;
  title: string;
  body: string;
  status?: number;
}

export const initialState: ErrorMessageStateInterface = {
  show: false,
  title: '',
  body: '',
  status: 200
};

const errorMessageReducer = createReducer(
  initialState,
  on(loadErrorMessagesSuccess, (state, payload) => {
    return {
      ...state, ...payload
    };

  }),
  on(loadErrorMessagesFailure, state => {
    return {
      ...state, ...initialState
    };
  })
);

export function reducer(state: ErrorMessageStateInterface | undefined, action: Action) {
  return errorMessageReducer(state, action);
}
