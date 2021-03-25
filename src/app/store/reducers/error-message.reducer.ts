import {Action, createReducer, on} from '@ngrx/store';
import {loadErrorMessagesFailure, loadErrorMessagesSuccess} from '../actions/error-message.actions';


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
  on(loadErrorMessagesSuccess, (state, payload) => ({
    ...state, ...payload
  })),
  on(loadErrorMessagesFailure, state => ({
    ...state, ...initialState
  }))
);

export const reducer = (state: ErrorMessageStateInterface | undefined, action: Action) =>
  errorMessageReducer(state, action);

