import { Action, createReducer, on } from '@ngrx/store';
import { closeModals, loadModals } from '../actions/modal.actions';


export const modalFeatureKey = 'modal';

export interface State {
  open: boolean;
}

export const initialState: State = {
  open: false
};


export const reducer = createReducer(
  initialState,
  on(loadModals, state => ({ ...state, open: true })),
  on(closeModals, state => ({...state, open: false }))
);

