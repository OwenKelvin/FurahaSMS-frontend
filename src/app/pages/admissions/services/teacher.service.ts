import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url: string = 'api/teachers';
  constructor(private http: HttpClient) { }

  store(data: any): Observable<any> {
    const submitDate = {
      ...data,
      date_of_birth: data.dateOfBirth,
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames,
      gender_id: data.gender,
      religion_id: data.religion,
    };
    return this.http.post('api/admissions/teachers', submitDate);
  }
  getTeacherById(id: number) {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(
        map(this.transformTeacher),
        catchError(error => {
          return throwError(error);
        })
      );
  }
  transformTeacher = (user: any) => ({
    ...user,
    firstName: user.first_name,
    middleName: user.middle_name,
    lastName: user.last_name,
    otherNames: user.other_names,
    dateOfBirth: user.date_of_birth,
    teacherId: user.teacher_id,
    name: user.first_name + ' ' + user.last_name
  });

  getActiveTeachers() {
    return this.http.get<any[]>(`${this.url}/?active=1`)
      .pipe(
        map(users => users.map(this.transformTeacher)),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
