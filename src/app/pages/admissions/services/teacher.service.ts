import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  store(data): Observable<any> {
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
}
