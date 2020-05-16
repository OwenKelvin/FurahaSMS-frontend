import { Injectable } from '@angular/core';
import { Observable, throwError, noop } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }
  createNewStudent(newStudentData: any): Observable<any> {

    return this.save(newStudentData);
  }
  save(data: any, idNumber: any = null): Observable<any> {
    const submitData = {
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames,
      date_of_birth: data.dateOfBirth,
      student_school_id_number: data.idNumber,
      birth_cert_number: data.birthCertNumber,
      gender_id: data.gender,
      religion_id: data.religion

    };
    let url = `api/admissions/students/identification`;

    if (idNumber) {
      url = `${url}/${data.id}`;
      return this.http.patch<any>(url, { ...submitData }).pipe(map(user => {
        return user;
      }));
    } else {
      return this.http.post<any>(url, submitData).pipe(map(user => {
        return user;
      }));
    }
  }
  getStudentById(id: string | number): Observable<any> {
    const url = `api/students?id=${id}`;
    return this.http.get<any>(url)
      .pipe(
        map(user => ({
          ...user,
          firstName: user.first_name,
          middleName: user.middle_name,
          lastName: user.last_name,
          otherNames: user.other_names,
          dateOfBirth: user.date_of_birth,
          studentId: user.student_id
        })),
        catchError(error => {
          return throwError(error);
        })
      );
  }
  getStudentBySchoolId(idNumber: string | number): Observable<any> {
    const url = `api/student/id-number?q=${idNumber}`;
    return this.http.get<any>(url)
      .pipe(
        map(user => {
          return user;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  getRecentlyCreatedStudents(): Observable<any[]> {
    const url = `api/students?last=30`;
    return this.http.get(url).pipe(map(res => res as any[]));
  }

  getStudentByName(query: string): Observable<any[]> {
    return this.http.get<any>(
      'api/students', {
      params: { q: query }
    }).pipe(
      map((data: any) => data.map((item: any) => ({
        ...item,
        name: item.first_name + ' ' + item.last_name + ' ' + (item.middle_name ? item.middle_name : ''),
        firstName: item.first_name,
        lastName: item.last_name,
        middleName: item.middle_name,
        otherNames: item.other_names,
        dateOfBirth: item.date_of_birth,
      })) || []),
      catchError((e) => throwError(e))
    );
  }
}
