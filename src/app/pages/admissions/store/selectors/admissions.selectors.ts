import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmissions from '../reducers';

export const selectAdmissionsState = createFeatureSelector<fromAdmissions.State>(
  fromAdmissions.admissionsFeatureKey
);
