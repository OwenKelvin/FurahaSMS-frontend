import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromStudentFeeStatementActions from './../actions/student-fee-statement.actions';
import { concatMap, map, catchError } from 'rxjs/operators';
import { StudentFeePaymentService } from '../../services/student-fee-payment.service';
import { of } from 'rxjs';


@Injectable()
export class StudentFeeStatementEffects {

  constructor(
    private actions$: Actions,
    private StudentFeePaymentService: StudentFeePaymentService
  ) { }
  
  loadStudentFeeStatement$ = createEffect(() => this.actions$.pipe(
    ofType(fromStudentFeeStatementActions.loadStudentFeeStatements),
    concatMap((payload) =>
      this.StudentFeePaymentService.getFeesStatementForStudentWithId(payload.data.id).pipe(
        map(data => fromStudentFeeStatementActions.loadStudentFeeStatementsSuccess({
          data: { studentId: payload.data.id, statementDetails: data }
        })),
        catchError(error => of(fromStudentFeeStatementActions.loadStudentFeeStatementsFailure({ error }))))
    )
  ));

}
 