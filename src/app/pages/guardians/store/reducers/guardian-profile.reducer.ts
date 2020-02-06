import { Action, createReducer, on } from '@ngrx/store';
import * as GuardianProfileActions from '../actions/guardian-profile.actions';

export const guardianProfileFeatureKey = 'guardianProfile';

export interface State {

}

export const initialState: State = {

};

const guardianProfileReducer = createReducer(
  initialState,

  on(GuardianProfileActions.loadGuardianProfiles, (state, payload) => ({ ...state, [(payload as any).id]: payload })),
  on(GuardianProfileActions.loadGuardianProfilesSuccess, (state, action) => state),
  on(GuardianProfileActions.loadGuardianProfilesFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return guardianProfileReducer(state, action);
}
