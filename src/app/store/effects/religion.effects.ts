import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadReligions, loadReligionsSuccess, loadReligionsFailure } from '../actions/religion.actions';
import { concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReligionService } from 'src/app/services/religion.service';



@Injectable()
export class ReligionEffects {

  loadReligions$ = createEffect(() => this.actions$.pipe(
      ofType(loadReligions),
      concatMap(() =>
        this.religionService.all$.pipe(
          map(data => loadReligionsSuccess({ data })),
          catchError((error) => of(loadReligionsFailure({ error }))))
      )
    ));


  constructor(private actions$: Actions, private religionService: ReligionService) { }

}
