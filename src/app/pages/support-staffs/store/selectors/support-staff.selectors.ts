import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSupportStaff from '../reducers/support-staff.reducer';

export const selectSupportStaffState = createFeatureSelector<fromSupportStaff.State>(
  fromSupportStaff.supportStaffFeatureKey
);

export const selectSupportStaffWithId = (id: number) => createSelector(
  selectSupportStaffState,
  (supportStaffProfile) => (supportStaffProfile && supportStaffProfile.staffs) ? supportStaffProfile.staffs[id] : null
);
