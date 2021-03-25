import { Action, createReducer, on } from '@ngrx/store';
import * as MyProfileActions from '../actions/my-profile.actions';
import { IUserProfile as State, IUserProfile } from 'src/app/interfaces/user-profile.interface';


export const myProfileFeatureKey = 'myProfile';


//  export interface State {
//   }

export const initialState: IUserProfile = {
  id: 0,
  lastName: '',
  firstName: '',
  middleName: '',
  otherNames: '',
  phone: '',
  email: '',
  dateOfBirth: '',
  permissions: []
};

const myProfileReducer = createReducer(
  initialState,

  on(MyProfileActions.loadMyProfiles, state => state),
  on(MyProfileActions.loadMyProfilesSuccess, (state, action) => ({...state, ...action.data})),
  on(MyProfileActions.loadMyProfilesFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => myProfileReducer(state, action);
