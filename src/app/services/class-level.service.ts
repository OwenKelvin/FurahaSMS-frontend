import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ClassLevelInterface} from '../interfaces/class-level.interface';
import {crudMixin} from '../shared/mixins/crud.mixin';


@Injectable({
  providedIn: 'root'
})
export class ClassLevelService extends crudMixin() {

  url = `api/curriculum/class-levels`;
  deleteItem = this.delete;
  constructor(public _http: HttpClient) {
    super(_http);
  }

  // all$ = this.http.get<any[]>(this.url);

  getAll(
    data: { includeUnits?: 1 | null; includeLevels?: 1 | null; academicYearId?: number | null } = {
      includeUnits: null,
      includeLevels: null,
      academicYearId: null
    }
  ): Observable<any[]> {
    const {includeUnits, includeLevels, academicYearId} = data;

    const params = {
      ['include_levels']: includeLevels ? '1' : '',
      ['academic_year_id']: academicYearId ? '1' : '',
      ['include_units']: includeUnits ? '1' : ''
    };

    return this.http.get<any[]>(`api/curriculum/class-levels`, {params});
  }

  get({id}: { id: number }) {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.get<any>(url);
  }

  getItemById(id: number): Observable<any> {
    return super.getItemById(id).pipe(
      map(res => ({...res, classLevelCategory: res.class_level_category_id})),
    );
  }

  submit(data: ClassLevelInterface) {
    let url = `api/curriculum/class-levels`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, {
          ...data,
          ['class_level_category_id']: data.classLevelCategory
        });
    } else {
      return this.http
        .post<any>(url, {
          ...data,
          ['class_level_category_id']: data.classLevelCategory
        });
    }
  }

  delete(id: number): Observable<any> {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.delete<any>(url);
  }
}
