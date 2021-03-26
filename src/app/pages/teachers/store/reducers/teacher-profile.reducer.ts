import {Action, createReducer, on} from '@ngrx/store';
import * as TeacherProfileActions from '../actions/teacher-profile.actions';
import {IUserProfile} from '../../../../interfaces/user-profile.interface';

export const teacherProfileFeatureKey = 'teacherProfile';

export interface State {
  [key: number]: {
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: string;
    email?: string;
    phone?: string;
    id?: number;
  };
}

export const initialState: State = {

  0: {
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: ''
  }
};


const teacherProfileReducer = createReducer(
  initialState,

  // on(TeacherProfileActions.loadTeacherProfiles, (state, action) => ({
  //   ...state, [action.data.id]: {...state[action.data.id], ...(action.data as IUserProfile)}
  // })),
  on(TeacherProfileActions.loadTeacherProfiles, (state, _action) => ({
    ...state
  })),
  on(TeacherProfileActions.loadTeacherProfilesSuccess, (state, action) => ({
    ...state,
    [action.data.id]: {
      ...state[action.data.id],
      ...action.data
    }
  })),
  on(TeacherProfileActions.loadTeacherProfilesFailure, (state, _action) => state),
);

export const reducer = (state: State | undefined, action: Action) => teacherProfileReducer(state, action);
