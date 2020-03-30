import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupportStaffService {

  constructor(
    private http: HttpClient
  ) { }
  getSupportStaffById(id: number): any {
    return this.http.get(`api/admissions/support-staffs/${id}`);
  }
  save(data: any): Observable<any> {

    return this.http.post('api/admissions/support-staffs', {
      ...data,
      date_of_birth: data.dateOfBirth,
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames
    });
  }
}
