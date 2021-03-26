import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Store, select} from '@ngrx/store';
import {selectGenders, selectGender} from '../store/selectors/app.selectors';
import {loadGenders} from '../store/actions/gender.actions';
import * as fromGenders from 'src/app/store/reducers/gender.reducer';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  url = 'api/genders';

  loadAll$: Observable<fromGenders.State> = this.store.pipe(select(selectGenders))
    .pipe(tap(gender => !(gender[0] && gender[0].id) ? this.store.dispatch(loadGenders()) : ''));

  all$: Observable<any> = this.http.get<any>(`${this.url}/all`);
  constructor(private http: HttpClient, private store: Store) {
  }
  getGender = (id: number | string) => this.store.pipe(select(selectGender(id)));

}
