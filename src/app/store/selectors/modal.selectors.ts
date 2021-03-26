import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromModal from '../reducers/modal.reducer';
import { selectAppState } from './app.selectors';

export const selectModalState = createSelector(
  selectAppState,
  app => app[fromModal.modalFeatureKey]
);

export const selectModalOpenState = createSelector(
  selectModalState,
  modal => modal.open
);
