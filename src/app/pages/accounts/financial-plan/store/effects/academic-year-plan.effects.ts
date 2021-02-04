import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as AcademicYearPlanActions from '../actions/academic-year-plan.actions';
import {FinancialPlanService} from '../../../services/financial-plan.service';


@Injectable()
export class AcademicYearPlanEffects {

  loadAcademicYearPlans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcademicYearPlanActions.loadAcademicYearPlans),
      concatMap(({id: academicYearId}) => this.financialPlanService.getForAcademicYear(academicYearId).pipe(
        map(data => AcademicYearPlanActions.loadAcademicYearPlansSuccess({academicYearId, data})),
        catchError(error => of(AcademicYearPlanActions.loadAcademicYearPlansFailure({error}))))
      )
    )
  );

  constructor(private actions$: Actions, private financialPlanService: FinancialPlanService) {
  }

}
