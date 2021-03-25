import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAcademicYearPlan from '../reducers/academic-year-plan.reducer';

export const selectAcademicYearPlanState = createFeatureSelector<fromAcademicYearPlan.State>(
  fromAcademicYearPlan.academicYearPlanFeatureKey
);

export const selectPlanForAcademicYearWithId = (id: number) => createSelector(
  selectAcademicYearPlanState,
  academicYear => academicYear?.[id]
);

