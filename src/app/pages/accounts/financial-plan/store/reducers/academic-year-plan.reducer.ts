import {Action, createReducer, on} from '@ngrx/store';
import * as AcademicYearPlanActions from '../actions/academic-year-plan.actions';

export const academicYearPlanFeatureKey = 'academicYearPlan';

export interface State {
  [id: number]: {
    academicYear: {
      id: number;
      name?: string;
      startDate?: string;
      endDate?: string;
    };
    financialYearPlan: any[];
  };
}

export const initialState: State = {
  0: {
    academicYear: {
      id: 0
    },
    financialYearPlan: []
  }
};

const academicYearPlanReducer = createReducer(
  initialState,

  on(AcademicYearPlanActions.loadAcademicYearPlans, (state, payload) => {
    const {name, id, start_date: startDate, end_date: endDate} = payload;
    if (name) {
      return {...state, [id]: {academicYear: {id, name, startDate, endDate}, financialYearPlan: []}};
    }
    return state;
  }),
  on(AcademicYearPlanActions.loadAcademicYearPlansSuccess, (state, action) => ({
      ...state,
      [action.academicYearId]: {...state?.[action.academicYearId], financialYearPlan: action.data}
    })),
  on(AcademicYearPlanActions.loadAcademicYearPlansFailure, (state, _action) => state),
);

export const reducer = (state: State | undefined, action: Action) => academicYearPlanReducer(state, action);
