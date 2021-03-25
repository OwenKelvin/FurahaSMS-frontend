import { Action, createReducer, on } from '@ngrx/store';
import { loadToastShowsSuccess, loadToastShowsFailure } from './../actions/toast-show.actions';

export const toastFeatureKey = 'toast';

export interface ToastStateInterface {
  showMessage: boolean;
  toastHeader: string;
  toastBody: string;
  toastTime: string;
}

export const initialState: ToastStateInterface = {
  showMessage: false,
  toastHeader: '',
  toastBody: '',
  toastTime: ''
};

const toastReducer = createReducer(
  initialState,
  on(loadToastShowsSuccess, (state, payload) => ({
      ...state, ...payload
    })),
  on(loadToastShowsFailure, (state) => ({
      ...state, showMessage : false
    }))
);

export const reducer = (state: ToastStateInterface | undefined, action: Action) => toastReducer(state, action);
