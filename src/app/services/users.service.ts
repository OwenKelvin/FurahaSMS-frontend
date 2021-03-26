import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  findIfEmailExists(email: string): Observable<any> {
    const url = `api/users/email/?q=${email}`;
    return this.http.get(url);
  }

  update(
    { userId, fieldName, fieldNewValue }: { userId: number; fieldName: string; fieldNewValue: string }
  ): Observable<any> {
    const data: any = {
      [fieldName]: fieldNewValue
    };
    return this.http.patch(`api/users/${userId}`, {
      ['first_name']: data.FirstName,
      ['last_name']: data.LastName,
      ['middle_name']: data.MiddleName,
      ['other_names']: data.OtherNames,
      ['gender_id']: data.gender,
      ['religion_id']: data.religion,
      ['date_of_birth']: data.DateOfBirth,
      email: data.Email,
      phone: data.Phone,
    });
  }

  uploadPhoto({ file }: { file: File }): Observable<any> {

    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('profilePicture', file);

    return this.http.post('api/users/profile-picture', myFormData, { headers });
  }

  saveProfilePicture({ userId, profilePicId }: { userId: number; profilePicId: number }): Observable<any> {
    const data: any = { ['profile_pic_id']: profilePicId };
    return this.http.patch(`api/users/${userId}`, data);
  }

  getProfilePicture({ userId }: { userId: number }) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    headers.append('Content-Type', 'application/pdf');
    return this.http.get(`api/users/profile-picture/${userId}`, { headers, responseType: 'blob' });
  }

  resetPasswordForUserWithId = ({ id, resetPassword }: { id: number; resetPassword: string }) =>
    this.http.post(`api/users/${id}/password-reset`, {['reset_password']: resetPassword});
}
