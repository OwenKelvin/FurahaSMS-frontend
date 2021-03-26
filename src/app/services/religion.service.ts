import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Store, select} from '@ngrx/store';
import * as fromReligions from 'src/app/store/reducers/religion.reducer';
import {selectReligions, selectReligion} from '../store/selectors/app.selectors';
import {loadReligions} from '../store/actions/religion.actions';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {
  url = 'api/religions';

  loadAll$: Observable<fromReligions.State> = this.store.pipe(select(selectReligions))
    .pipe(tap(religion => !(religion[0] && religion[0].id) ? this.store.dispatch(loadReligions()) : ''));


  all$: Observable<any> = this.http.get<any>(this.url);
  constructor(private http: HttpClient, private store: Store) {
  }
  getReligion$ = (id: number | string) => this.store.pipe(select(selectReligion(id)));
}
