import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';
import { genderFeatureKey } from '../reducers/gender.reducer';
import { religionFeatureKey } from '../reducers/religion.reducer';
import { editModeFeatureKey } from '../reducers/edit-mode.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectGenders = createSelector(
  selectAppState,
  app => app ? Object.values(app[genderFeatureKey]) : ([{ }])
);

export const selectGender = (id: number | string) => createSelector(
  selectGenders,
  genders => genders.find(({ id: itemId }) => +id === +itemId)
);

export const selectReligions = createSelector(
  selectAppState,
  app => app ? Object.values(app[religionFeatureKey]) : ([{ }])
);

export const selectReligion = (id: number | string) => createSelector(
  selectReligions,
  religion => religion.find(({ id: itemId }) => +id === +itemId)
);
export const selectEditModeOnState = createSelector(
  selectAppState,
  app => app ? app[editModeFeatureKey]?.on: false
);
