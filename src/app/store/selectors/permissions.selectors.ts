import { createSelector } from '@ngrx/store';
import { selectAppState } from './app.selectors';
import { permissionsFeatureKey } from '../reducers/permissions.reducer';

export const selectAppPermissionsState = createSelector(
  selectAppState,
  state => state ? state[permissionsFeatureKey] : { }
);

export const selectDashdoardLinks = createSelector(
  selectAppPermissionsState,
  state => state.dashboard
);

export const selectAccountsLinks = createSelector(
  selectAppPermissionsState,
  state => state.accounts
);

export const selectexamBankLinks = createSelector(
  selectAppPermissionsState,
  state => state.examBank
);

export const selectLibraryAdminBooksLinks = createSelector(
  selectAppPermissionsState,
  state => state.libraryAdminBooks
);
export const selectAcademicsLinks = createSelector(
  selectAppPermissionsState,
  state => state.academics
);

export const selectAdmissionsLinks = createSelector(
  selectAppPermissionsState,
  state => state.admissions
);

export const selectStudentAdmissionsLinks = createSelector(
  selectAppPermissionsState,
  state => state.studentAdmissions
);

export const selectAcademicYearsLinks = createSelector(
  selectAppPermissionsState,
  state => state.academicYears
);

export const selectLibraryLinks = createSelector(
  selectAppPermissionsState,
  state => state.library
);

export const selectAcademicCurriculumLinks = createSelector(
  selectAppPermissionsState,
  state => state.academicCurriculum
);

export const selectLibraryAdminLinks = createSelector(
  selectAppPermissionsState,
  state => state.libraryAdmin
);

export const selectProcurementLinks = createSelector(
  selectAppPermissionsState,
  state => state.procurement
);

export const selectLibraryAdminUsersLinks = createSelector(
  selectAppPermissionsState,
  state => state.libraryAdminUsers
);

export const selectTeachingStaffAdmissionsLinks = createSelector(
  selectAppPermissionsState,
  state => state.teachingStaffAdmissions
);

export const selectTimeTableLinks = createSelector(
  selectAppPermissionsState,
  state => state.timeTable
);

export const rolesAndPermissionsLinks = createSelector(
  selectAppPermissionsState,
  state => state.rolesAndPermissions
);

export const allLinks = createSelector(
  selectAppPermissionsState,
  state => Object.values(state).reduce((a, b) => ([...a, ...b]), [])
);

