import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SupportStaffActions from '../actions/support-staff.actions';
import {
  RolesAndPermissionsService
} from 'src/app/pages/roles-and-permissions/services/roles-and-permissions.service';

@Injectable()
export class SupportStaffEffects {
  constructor(
    private actions$: Actions,
    private rolesPermissionService: RolesAndPermissionsService ) { }
  loadSupportStaffs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SupportStaffActions.loadSupportStaffs),
      concatMap(() =>
        this.rolesPermissionService.staffTypes().pipe(
          map(data => SupportStaffActions.loadSupportStaffsSuccess({ data })),
          catchError(error => of(SupportStaffActions.loadSupportStaffsFailure({ error }))))
      )
    );
  });
}
