import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSupportStaff from '../reducers/support-staff.reducer';

export const selectSupportStaffState = createFeatureSelector<fromSupportStaff.State>(
  fromSupportStaff.supportStaffFeatureKey
);
