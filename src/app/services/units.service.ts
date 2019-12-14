import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  constructor(private http: HttpClient) {}
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
  getAll(): Observable<any> {
    const url = 'api/curriculum/units/all';
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
  deleteItem(id): Observable<any> {
    const url = 'api/curriculum/units/${id}';
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
