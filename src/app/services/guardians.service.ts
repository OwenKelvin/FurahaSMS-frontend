import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardiansService {

  constructor(private http: HttpClient) { }
  submit(data: any): Observable<any> {
    const submitData = {
      id: data.id,
      email: data.email,
      ['first_name']: data.firstName,
      ['last_name']: data.lastName,
      ['middle_name']: data.middleName,
      ['other_names']: data.otherNames,
      ['date_of_birth']: data.dateOfBirth,
      ['student_school_id_number']: data.idNumber,
      ['birth_cert_number']: data.birthCertNumber,
      ['gender_id']: data.gender,
      ['religion_id']: data.religion,
      phone: data.phone,
      // student_id: data.student_id,
      relation: data.relation

    };
    let url = `api/students/${data.student_id}/guardians`;
    // let url = 'api/admissions/students/guardians';

    if (data.id) {
      url = `${url}/${data.id}`;
      return this.http.patch<any>(url, submitData).pipe(map(user => user));
    } else {
      return this.http.post<any>(url, submitData).pipe(map(user => user));
    }
  }
  getForStudent(userId: number): Observable<any[]> {
    if (userId === 0) {
      return of([]);
    }
    const url = 'api/students/' + userId + '/guardians';
    return this.http.get<any>(url).pipe(map(user => user));

  }
  getGuardianWithId(userId: number | string): Observable<any> {
    const url = `api/guardians/${userId}`;
    return this.http.get<any>(url)
      .pipe(map(user => ({
        ...user,
        firstName: user.first_name,
        middleName: user.middle_name,
        lastName: user.last_name,
        otherNames: user.other_names,
        dateOfBirth: user.date_of_birth
      })));
  }
  getStudents(userId: number | string): Observable<any> {
    const url = `api/guardians/${userId}/students`;
    return this.http.get<any>(url);
  }
}
