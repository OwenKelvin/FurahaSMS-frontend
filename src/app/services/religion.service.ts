import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromReligions from 'src/app/store/reducers/religion.reducer'
import { selectReligions } from '../store/selectors/app.selectors';
import { loadReligions } from '../store/actions/religion.actions';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {
  constructor(private http: HttpClient, private store: Store) { }
  loadAll$: Observable<fromReligions.State> = this.store.pipe(select(selectReligions))
    .pipe(tap(religion => !religion[0].id ? this.store.dispatch(loadReligions()) : ''))

  
  getAll(): Observable<any> {
    const url = 'api/religions/all';
    return this.http.get<any>(url)
      .pipe(map(data => {
        return data;
      },
        () => {
          // Error Has been captured by interceptor
        }
      ));
  }
}
