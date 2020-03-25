import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  store(data: any): Observable<any> {
    const submitDate = {
      ...data,
      date_of_birth: data.dateOfBirth,
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames
    };
    return this.http.post('api/admissions/teachers', submitDate);
  }
  getTeacherById(id: number) {
    return this.http.get<any>(`api/teachers/${id}`)
      .pipe(
        map(user => ({
          ...user,
          firstName: user.first_name,
          middleName: user.middle_name,
          lastName: user.last_name,
          otherNames: user.other_names,
          dateOfBirth: user.date_of_birth,
          teacherId: user.teacher_id
        })),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
