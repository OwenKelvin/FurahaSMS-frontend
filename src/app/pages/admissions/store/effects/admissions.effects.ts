import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AdmissionsActions from '../actions/admissions.actions';
import * as StaffTypeActions from '../actions/staff-type.actions';
import { RolesAndPermissionsService } from 'src/app/pages/roles-and-permissions/services/roles-and-permissions.service';

@Injectable()
export class AdmissionsEffects {
  constructor(
    private actions$: Actions,
    private rolesPermissionService: RolesAndPermissionsService
  ) { }

  loadAdmissionss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AdmissionsActions.loadAdmissionss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AdmissionsActions.loadAdmissionssSuccess({ data })),
          catchError(error => of(AdmissionsActions.loadAdmissionssFailure({ error }))))
      )
    );
  });
  loadStaffTypes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StaffTypeActions.loadStaffTypes),
      concatMap(() => 
        this.rolesPermissionService.staffTypes().pipe(
          map(data => StaffTypeActions.loadStaffTypesSuccess({ data })),
          catchError(error => of(StaffTypeActions.loadStaffTypesFailure({ error }))))
      )
    );
  });
}
