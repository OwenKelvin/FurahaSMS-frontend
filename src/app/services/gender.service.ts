import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectGenders, selectGender } from '../store/selectors/app.selectors';
import { loadGenders } from '../store/actions/gender.actions';
import * as fromGenders from 'src/app/store/reducers/gender.reducer'

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  
  constructor(private http: HttpClient, private store: Store) { }
  loadAll$: Observable<fromGenders.State> = this.store.pipe(select(selectGenders))
      .pipe(tap(gender => !gender[0].id ? this.store.dispatch(loadGenders()) : ''))
  
  getAll(): Observable<any> {
    const url = 'api/genders/all';
    return this.http.get<any>(url)
      .pipe(map(data => {
        return data;
      },
        () => {
          // Error Has been captured by interceptor
        }
      ));
  }
  getGender = (id: number | string) => this.store.pipe(select(selectGender(id)))

}
