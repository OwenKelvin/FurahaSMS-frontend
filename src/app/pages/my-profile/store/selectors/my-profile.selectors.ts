import { createFeatureSelector } from '@ngrx/store';
import * as fromMyProfile from '../reducers/my-profile.reducer';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';

export const selectMyProfileState = createFeatureSelector<IUserProfile>(
  fromMyProfile.myProfileFeatureKey
);