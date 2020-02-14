import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectTinyMceConfig = (state: AppState) => state.tinyMCEConfig;
