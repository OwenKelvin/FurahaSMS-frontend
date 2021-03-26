import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMyProfile from '../reducers/my-profile.reducer';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';

export const selectMyProfileState = createFeatureSelector<IUserProfile>(
  fromMyProfile.myProfileFeatureKey
);

export const selectMyPermissions = createSelector(
  selectMyProfileState,
  profile => profile?.permissions
);

export const selectMyRoles = createSelector(
  selectMyProfileState,
  profile => profile?.roles
);

export const selectICan = (permission: string) => createSelector(
  selectMyProfileState,
  profile => profile?.permissions?.includes(permission) || profile?.roles?.includes('super admin')
);
