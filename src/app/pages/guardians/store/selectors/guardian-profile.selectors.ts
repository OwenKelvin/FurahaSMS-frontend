import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGuardianProfile from '../reducers/guardian-profile.reducer';

export const selectGuardianProfileState = createFeatureSelector<fromGuardianProfile.State>(
  fromGuardianProfile.guardianProfileFeatureKey
);
