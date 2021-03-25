import { createAction, props } from '@ngrx/store';

export const loadAcademicYearPlans = createAction(
  '[AcademicYearPlan] Load AcademicYearPlans',
  props<{ id: number; name?: string; ['start_date']?: string; ['end_date']?: string }>()
);

export const loadAcademicYearPlansSuccess = createAction(
  '[AcademicYearPlan] Load AcademicYearPlans Success',
  props<{ academicYearId: any; data: any }>()
);

export const loadAcademicYearPlansFailure = createAction(
  '[AcademicYearPlan] Load AcademicYearPlans Failure',
  props<{ error: any }>()
);
