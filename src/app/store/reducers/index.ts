import { InjectionToken } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from './../../../environments/environment';
import * as fromToast from './toast.reducer';
import * as fromMenuToggle from './menu-toggle.reducer';
import * as fromStudentProfileUpdate from './student-profile-update.reducer';
import * as fromErrorMessage from './error-message.reducer';
import * as fromActivePage from './active-page.reducer';
import * as fromDialog from './dialog.reducer';


export interface AppState {

  [fromToast.toastFeatureKey]: fromToast.ToastStateInterface;
  [fromMenuToggle.menuToggleFeatureKey]: fromMenuToggle.MenuStateInterface;
  [fromStudentProfileUpdate.studentProfileUpdateFeatureKey]: fromStudentProfileUpdate.StudentProfileStateInterface;
  [fromErrorMessage.errorMessageFeatureKey]: fromErrorMessage.ErrorMessageStateInterface;
  [fromActivePage.activePageFeatureKey]: fromActivePage.ActivePageStateInterface;
  [fromDialog.dialogFeatureKey]: fromDialog.IDialogShow;



}

export const reducers: ActionReducerMap<AppState> = {
  [fromToast.toastFeatureKey]: fromToast.reducer,

  [fromMenuToggle.menuToggleFeatureKey]: fromMenuToggle.reducer,

  [fromStudentProfileUpdate.studentProfileUpdateFeatureKey]: fromStudentProfileUpdate.reducer,

  [fromErrorMessage.errorMessageFeatureKey]: fromErrorMessage.reducer,

  [fromActivePage.activePageFeatureKey]: fromActivePage.reducer,

  [fromDialog.dialogFeatureKey]: fromDialog.reducer
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
export const reducerProvider = { provide: REDUCER_TOKEN, useValue: reducers };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
