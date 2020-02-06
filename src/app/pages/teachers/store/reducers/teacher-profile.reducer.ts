import { Action, createReducer, on } from '@ngrx/store';
import * as TeacherProfileActions from '../actions/teacher-profile.actions';

export const teacherProfileFeatureKey = 'teacherProfile';

export interface State {

}

export const initialState: State = {

};

const teacherProfileReducer = createReducer(
  initialState,

  on(TeacherProfileActions.loadTeacherProfiles, (state, payload) => {
    return { ...state, [(payload as any).id]: payload}
  }),
  on(TeacherProfileActions.loadTeacherProfilesSuccess, (state, action) => state),
  on(TeacherProfileActions.loadTeacherProfilesFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return teacherProfileReducer(state, action);
}
