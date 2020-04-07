import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, catchError, map } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as PaymentTypesAction from './../actions/payment-type.actions';
import { PaymentTypeService } from '../../services/payment-type.service';



@Injectable()
export class PaymentTypeEffects {

  constructor(
    private actions$: Actions,
    private paymentTypeService: PaymentTypeService
  ) { }
  loadPaymentTypes$ = createEffect(() => this.actions$.pipe(
      ofType(PaymentTypesAction.loadPaymentTypes),
      concatMap(() =>
        this.paymentTypeService.getAll().pipe(
          map(data => PaymentTypesAction.loadPaymentTypesSuccess({ data })),
          catchError(error => of(PaymentTypesAction.loadPaymentTypesFailure({ error }))))
      )
    ));

}
