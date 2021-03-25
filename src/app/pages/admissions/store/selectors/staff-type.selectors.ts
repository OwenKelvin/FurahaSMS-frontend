import { createSelector } from '@ngrx/store';

import { selectAdmissionsState } from './admissions.selectors';
import { staffTypeFeatureKey } from '../reducers/staff-type.reducer';

export const selectStaffTypesState = createSelector(
  selectAdmissionsState,
  admissions => admissions ? admissions[staffTypeFeatureKey]: {}
);


export const selectStaffTypes = createSelector(
  selectStaffTypesState,
  admissions => Object.values(admissions).filter(item => item.id !== 0)
);

export const selectStaffType = (id: number) => createSelector(
  selectStaffTypesState,
  staffType => staffType ? staffType[id] : null
);
