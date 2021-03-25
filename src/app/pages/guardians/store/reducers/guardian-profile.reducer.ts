import { Action, createReducer, on } from '@ngrx/store';
import * as GuardianProfileActions from '../actions/guardian-profile.actions';

export const guardianProfileFeatureKey = 'guardianProfile';

export interface State {
  [key: number]: {
    firstName: string;
    lasttName: string;
    middletName: string;
    dateOfBirth: string;
    email?: string;
    phone?: string;
    id?: number;
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

const guardianProfileReducer = createReducer(
  initialState,

  on(GuardianProfileActions.loadGuardianProfiles, (state, payload) => ({ ...state, [(payload as any).id]: payload })),
  on(GuardianProfileActions.loadGuardianProfilesSuccess, (state, _action) => state),
  on(GuardianProfileActions.loadGuardianProfilesFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => guardianProfileReducer(state, action);
