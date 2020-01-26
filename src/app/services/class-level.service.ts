import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ClassLevelInterface } from '../interfaces/class-level.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelService {
  constructor(private http: HttpClient) { }

  getAll(
    data: { includeUnits?: 1; includeLevels?: 1 } = {
      includeUnits: null,
      includeLevels: null
    }
  ) {
    const { includeUnits, includeLevels } = data;
    let url = `api/curriculum/class-levels/?`;
    if (includeLevels) {
      url += `include_levels=1`;
    }
    if (includeUnits) {
      url += ``;
    }
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  get({ id }) {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  getItemById(id): Observable<any> {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  submit(data: ClassLevelInterface) {
    let url = `api/curriculum/class-levels`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, {
          ...data,
          abbreviation: data.abbr,
          class_level_category_id: data.classLevelCategory
        })
        .pipe(
          map(res => {
            return res;
          })
        );
    } else {
      return this.http
        .post<any>(url, {
          ...data,
          abbreviation: data.abbr,
          class_level_category_id: data.classLevelCategory
        })
        .pipe(
          map(res => {
            return res;
          })
        );
    }
  }
  delete(id: number): Observable<any> {
    const url = `api/curriculum/class-levels/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}
