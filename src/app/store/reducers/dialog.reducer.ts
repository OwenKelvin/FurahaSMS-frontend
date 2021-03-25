import { Action, createReducer, on } from '@ngrx/store';
import { closeDialog, showDialog } from '../actions/dialog.actions';


export const dialogFeatureKey = 'dialog';

export interface IDialogShow {
  show: boolean;
}

export const initialState: IDialogShow = {
  show: false,
};

const dialogReducer = createReducer(
  initialState,
  on(closeDialog, (state) => ({
      ...state, show: true,
    })),
  on(showDialog, (state) => ({
      ...state, show: false,
    })),
);

export const reducer = (state: IDialogShow | undefined, action: Action) => dialogReducer(state, action);
