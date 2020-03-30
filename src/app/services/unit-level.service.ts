import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitLevelService {
  constructor(private http: HttpClient) {}
  delete(id: number): Observable<any> {
    const url = `api/curriculum/unit-levels/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  getFilter(
    data: { academicYear: number | null } = { academicYear: null }
  ): Observable<any> {
    const { academicYear } = data;
    let url = 'api/curriculum/unit-levels/?';
    if (academicYear) {
      url += 'academic-year=' + academicYear;
    }
    return this.http.get<any>(url);
  }
  getAll(data: {unit: number | null} = { unit: null }) {
    const { unit } = data;
    let url = 'api/curriculum/unit-levels/?';
    if (unit) {
      url += 'unit=' + unit;
    }
    return this.http.get<any>(url).pipe(
      map(
        res => {
          return res.map((item: any) => {
            return { ...item };
          });
        },
        () => {
          // Error Has been captured by interceptor
        }
      )
    );
  }
}
