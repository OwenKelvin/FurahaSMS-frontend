import { createSelector } from '@ngrx/store';

import { selectAdmissionsState } from './admissions.selectors';

export const selectStaffTypes = createSelector(
  selectAdmissionsState,
  admissions => admissions.staffTypes
);

export const selectStaffType = (id) => createSelector(
  selectStaffTypes,
  staffType => staffType[id]
);
