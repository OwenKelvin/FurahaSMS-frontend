import { Action, createReducer, on } from '@ngrx/store';
import * as StudentProfileActions from '../actions/student-profile.actions';

export const studentProfileFeatureKey = 'studentProfile';

export interface State {

}

export const initialState: State = {

};

const studentProfileReducer = createReducer(
  initialState,

  on(StudentProfileActions.loadStudentProfiles, state => state),
  on(StudentProfileActions.loadStudentProfilesSuccess, (state, _action) => state),
  on(StudentProfileActions.loadStudentProfilesFailure, (state, _action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return studentProfileReducer(state, action);
}
