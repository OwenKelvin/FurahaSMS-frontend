import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAccount from '../reducers';

export const selectAccountState = createFeatureSelector<fromAccount.AccountsState>(
  fromAccount.accountFeatureKey
);
