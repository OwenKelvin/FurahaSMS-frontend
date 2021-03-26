import { Action, createReducer, on } from '@ngrx/store';
import * as EditModeActions from '../actions/edit-mode.actions';

export const editModeFeatureKey = 'editMode';

export interface State {
  on: boolean;
}

export const initialState: State = {
  on: false
};

const editModeReducer = createReducer(
  initialState,

  on(EditModeActions.loadEditModesSuccess, state => ({ ...state, on: true })),
  on(EditModeActions.loadEditModesFailure, state => ({ ...state, on: false })),

);

export const reducer = (state: State | undefined, action: Action) => editModeReducer(state, action);
