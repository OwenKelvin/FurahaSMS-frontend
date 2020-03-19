import { createSelector } from '@ngrx/store';

import { selectAdmissionsState } from './admissions.selectors';

export const selectStaffTypes = createSelector(
  selectAdmissionsState,
  admissions => admissions ? admissions.staffTypes: null
);

export const selectStaffType = (id) => createSelector(
  selectStaffTypes,
  staffType => staffType ? staffType[id]: null
);
