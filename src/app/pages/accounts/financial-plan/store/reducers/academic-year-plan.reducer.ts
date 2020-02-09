import { Action, createReducer, on } from '@ngrx/store';
import * as AcademicYearPlanActions from '../actions/academic-year-plan.actions';

export const academicYearPlanFeatureKey = 'academicYearPlan';

export interface State {
  academicYear: {
    id: number,
    name?: string,
    startDate?: string,
    endDate?: string;
  };
  financialYearPlan: object;
}

export const initialState: State = {
  academicYear: {
    id: 0
  },
  financialYearPlan: {}
};

const academicYearPlanReducer = createReducer(
  initialState,

  on(AcademicYearPlanActions.loadAcademicYearPlans, (state, payload) => {
    const { name, id, start_date: startDate, end_date: endDate } = payload;
    return { ...state, academicYear: { id, name, startDate, endDate}};
  }),
  on(AcademicYearPlanActions.loadAcademicYearPlansSuccess, (state, action) => state),
  on(AcademicYearPlanActions.loadAcademicYearPlansFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return academicYearPlanReducer(state, action);
}
