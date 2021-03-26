import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AccountActions from '../actions/account.actions';



@Injectable()
export class AccountEffects {

  loadAccounts$ = createEffect(() => this.actions$.pipe(

      ofType(AccountActions.loadAccounts),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AccountActions.loadAccountsSuccess({ data })),
          catchError(error => of(AccountActions.loadAccountsFailure({ error }))))
      )
    ));



  constructor(private actions$: Actions) {}

}
