import { Action, createReducer, on } from '@ngrx/store';
import * as GuardianProfileActions from '../actions/guardian-profile.actions';
import {IUserProfile} from '../../../../interfaces/user-profile.interface';

export const guardianProfileFeatureKey = 'guardianProfile';

export interface State {
  [key: number]: IUserProfile;
}

export const initialState: State = {

  0: {
    id: 0,
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: ''
  }
};

const guardianProfileReducer = createReducer(
  initialState,

  on(GuardianProfileActions.loadGuardianProfiles, (state, ) => state),
  on(GuardianProfileActions.loadGuardianProfilesSuccess, (state, payload) => ({
    ...state,
    [payload.data.id]: payload.data
  })),
  on(GuardianProfileActions.loadGuardianProfilesFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => guardianProfileReducer(state, action);
