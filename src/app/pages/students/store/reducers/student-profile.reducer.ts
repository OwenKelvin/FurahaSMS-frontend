import {Action, createReducer, on} from '@ngrx/store';
import * as StudentProfileActions from '../actions/student-profile.actions';
import {IUserProfile} from 'src/app/interfaces/user-profile.interface';

export const studentProfileFeatureKey = 'studentProfiles';

export interface State {
  [id: number]: IUserProfile;
}

export const initialState: State = {
  0: {
    id: 0,
    firstName: '',
    lastName: ''
  }
};

const studentProfileReducer = createReducer(
  initialState,

  on(StudentProfileActions.loadStudentProfiles, state => state),
  on(StudentProfileActions.loadStudentProfilesSuccess, (state, action) => ({
    ...state,
    [action.data.id]: {...state[action.data.id], ...(action.data as IUserProfile)}
  })),
  on(StudentProfileActions.loadStudentProfilesFailure, (state, _action) => state),
);

export const reducer = (state: State | undefined, action: Action) => studentProfileReducer(state, action);
