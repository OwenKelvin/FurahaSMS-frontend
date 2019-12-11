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
  createNewStudent(newStudentData): Observable<any> {
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
