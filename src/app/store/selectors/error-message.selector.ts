import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectErrorState = (state: AppState) => state.errorMessage;
