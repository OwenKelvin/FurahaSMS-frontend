import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as AdmissionsActions from '../actions/admissions.actions';
import * as StaffTypeActions from '../actions/staff-type.actions';
import {SupportStaffService} from 'src/app/pages/support-staffs/services/support-staff.service';

@Injectable()
export class AdmissionsEffects {
  loadAdmissions$ = createEffect(() => this.actions$.pipe(
    ofType(AdmissionsActions.loadAdmissions),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        map(data => AdmissionsActions.loadAdmissionsSuccess({data})),
        catchError(error => of(AdmissionsActions.loadAdmissionsFailure({error}))))
    )
  ));
  loadStaffTypes$ = createEffect(() => this.actions$.pipe(
    ofType(StaffTypeActions.loadStaffTypes),
    concatMap(() =>
      this.supportStaffService.staffTypes().pipe(
        map(data => StaffTypeActions.loadStaffTypesSuccess({data})),
        catchError(error => of(StaffTypeActions.loadStaffTypesFailure({error}))))
    )
  ));

  constructor(
    private actions$: Actions,
    private supportStaffService: SupportStaffService
  ) {
  }


}
