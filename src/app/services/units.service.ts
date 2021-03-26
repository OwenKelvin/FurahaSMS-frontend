import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  url = 'api/curriculum/units';
  all$ = this.http.get<any[]>(`${this.url}/all`);

  constructor(private http: HttpClient) {
  }

  getUnitWithId(id: number): Observable<any> {
    return this.get({id, includeUnitLevels: 1});
  }

  get(data: any): Observable<any> {
    const {includeUnitLevels, id, includeClassLevels} = data;
    let url = `api/curriculum/units/${id}/?`;
    if (includeUnitLevels === 1) {
      url += `include_unit_levels=${includeUnitLevels}`;
      if (includeClassLevels) {
        url += `&include_class_levels=${includeClassLevels}`;
      }
    } else if (includeClassLevels) {
      url += `include_class_levels=${includeClassLevels}`;
    }
    return this.http.get<any>(url);
  }

  submit(data: any) {
    let url = `api/curriculum/units`;
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, {...data, ['unit_category_id']: data.unitCategory});
    } else {
      return this.http.post<any>(url, {...data, ['unit_category_id']: data.unitCategory});
    }
  }

  getAllActiveSubjects(): Observable<any> {
    const url = 'api/curriculum/units/all/?active=1';
    return this.http.get<any>(url).pipe(shareReplay());
  }

  getAll(data = {unitLevel: null}): Observable<any> {
    const {unitLevel} = data;
    let url = `api/curriculum/units/`;
    if (unitLevel) {
      url += `?unit_levels=1`;
    }

    return this.http.get<any>(url).pipe(
      map(
        res => res.map((item: any) => ({...item, abbr: item.abbreviation}))
      )
    );
  }

  delete(id: number): Observable<any> {
    const url = `api/curriculum/units/${id}`;
    return this.http.delete<any>(url);
  }

  deleteItem(id: number): Observable<any> {
    const url = `api/curriculum/units/${id}`;
    return this.http.delete<any>(url);
  }
}
