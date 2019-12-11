import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  getStudentWithSchoolId(idNumber: string): Observable<any> {

    const url = `api/student/id-number?q=${idNumber}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(user => {
          return user;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
