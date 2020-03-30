import { createFeatureSelector } from '@ngrx/store';
import * as fromAdmissions from '../reducers';

export const selectAdmissionsState = createFeatureSelector<fromAdmissions.State>(
  fromAdmissions.admissionsFeatureKey
);
