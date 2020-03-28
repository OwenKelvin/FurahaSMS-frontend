import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';
import { genderFeatureKey } from '../reducers/gender.reducer';
import { religionFeatureKey } from '../reducers/religion.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectGenders = createSelector(
  selectAppState,
  app => Object.values(app[genderFeatureKey])
);

export const selectReligions = createSelector(
  selectAppState,
  app => Object.values(app[religionFeatureKey])
);
