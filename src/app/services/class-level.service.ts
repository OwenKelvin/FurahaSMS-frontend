import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClassLevelInterface } from '../interfaces/class-level.interface';
import { crudMixin } from '../shared/mixins/crud.mixin';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelService extends crudMixin() {
  constructor(public _http: HttpClient) { super(_http); }

  url = `api/curriculum/class-levels`;
  deleteItem = this.delete

  // all$ = this.http.get<any[]>(this.url);

  getAll(
    data: { includeUnits?: 1 | null; includeLevels?: 1 | null; academicYearId?: number | null } = {
      includeUnits: null,
      includeLevels: null,
      academicYearId: null
    }
  ): Observable<any[]> {
    const { includeUnits, includeLevels, academicYearId } = data;

    const params = {
      include_levels: includeLevels,
      academic_year_id: academicYearId,
      include_units: includeUnits
    };
    const queryStringParams = stringify(params);

    return this.http.get<any[]>(`api/curriculum/class-levels/?${queryStringParams}`);
  }
  get({ id }: {id: number}) {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.get<any>(url)
  }
  getItemById(id: number): Observable<any> {
    return super.getItemById(id).pipe(
      map(res => ({ ...res, classLevelCategory: res.class_level_category_id })),
    )
  }
  submit(data: ClassLevelInterface) {
    let url = `api/curriculum/class-levels`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, {
          ...data,
          class_level_category_id: data.classLevelCategory
        });
    } else {
      return this.http
        .post<any>(url, {
          ...data,
          class_level_category_id: data.classLevelCategory
        })
    }
  }
  delete(id: number): Observable<any> {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.delete<any>(url)
  }
}
