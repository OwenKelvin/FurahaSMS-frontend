import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  constructor(private http: HttpClient) { }

  getUnitWithId(id): Observable<any> {
    return this.get({ id, includeUnitLevels: 1 });
  }
  get(data): Observable<any> {
    const { includeUnitLevels, id, includeClassLevels } = data;
    let url = `api/curriculum/units/${id}/?`;
    if (includeUnitLevels === 1) {
      url += `include_unit_levels=${includeUnitLevels}`;
      if (includeClassLevels) {
        url += `&include_class_levels=${includeClassLevels}`;
      }
    } else if (includeClassLevels) {
      url += `include_class_levels=${includeClassLevels}`;
    }
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  submit(data: any) {
    let url = `api/curriculum/units`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, { ...data, unit_category_id: data.unitCategory })
        .pipe(
          map(res => {
            return res;
          })
        );
    } else {
      return this.http
        .post<any>(url, { ...data, unit_category_id: data.unitCategory })
        .pipe(
          map(res => {
            return res;
          })
        );
    }
  }
  getAllActiveSubjects(): Observable<any> {
    const url = 'api/units/all/?active=1';
    return this.http.get<any>(url).pipe(
      map(
        data => {
          return data;
        },
        error => {
          // Error Has been captured by interceptor
        }
      )
    );
  }
  getAll(data = { unitLevel: null }): Observable<any> {
    const { unitLevel } = data;
    let url = `api/curriculum/units/`;
    if (unitLevel) {
      url += `?unit_levels=1`;
    }

    return this.http.get<any>(url).pipe(
      map(
        res => {
          return res.map(item => {
            return { ...item, abbr: item.abbreviation };
          });
        },
        error => {
          // Error Has been captured by interceptor
        }
      )
    );
  }
  // getAll(): Observable<any> {
  //   const url = 'api/curriculum/units/all';
  //   return this.http.get<any>(url).pipe(
  //     map(
  //       data => {
  //         return data;
  //       },
  //       error => {
  //         // Error Has been captured by interceptor
  //       }
  //     )
  //   );
  // }
  delete(id: number): Observable<any> {
    const url = `api/curriculum/units/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  deleteItem(id): Observable<any> {
    const url = `api/curriculum/units/${id}`;
    return this.http.delete<any>(url).pipe(
      map(
        res => {
          return res;
        },
        error => {
          // Error Has been captured by interceptor
        }
      )
    );
  }
}
