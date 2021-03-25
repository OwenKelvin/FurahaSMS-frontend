import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelUnitLevelAllocationService {
  url = 'api/curriculum/class-levels/unit-levels';

  constructor(private http: HttpClient) {
  }

  getAll = () => this.http.get<any[]>(this.url).pipe(
    map(items => items.map(({id, name, taught_units: taughtUnits}: any) =>
      ({id, name, taughtUnits: taughtUnits.map(({id: idVal}: any) => idVal)})))
  );
  getAllWithUnitLevels = () => this.http.get<any[]>(this.url).pipe(
    map(items => items.map(({id, name, taught_units: taughtUnits}: any) =>
      ({id, name, taughtUnits})))
  );
  save = (data: any) => this.http.post(this.url, data);
}

