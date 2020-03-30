import { Action, createReducer, on } from '@ngrx/store';
import * as TeacherProfileActions from '../actions/teacher-profile.actions';

export const teacherProfileFeatureKey = 'teacherProfile';

export interface State {
  [key: number]: {
    firstName: string,
    lasttName: string,
    middletName: string,
    dateOfBirth: string,
    email?: string,
    phone?: string,
    id?: number,
  };
}

export const initialState: State = {

  0: {
    firstName: '',
    lasttName: '',
    middletName: '',
    dateOfBirth: ''
  }
};


const teacherProfileReducer = createReducer(
  initialState,

  on(TeacherProfileActions.loadTeacherProfiles, (state, payload) => ({ ...state, [(payload as any).id]: payload })),
  on(TeacherProfileActions.loadTeacherProfilesSuccess, (state, action) => {
    return {
      ...state,
      [action.data.id]: {
        ...state[action.data.id],
        ...action.data
      }
    };
  }),
  on(TeacherProfileActions.loadTeacherProfilesFailure, (state, _action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return teacherProfileReducer(state, action);
}
