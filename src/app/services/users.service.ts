import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }
  findIfEmailExists(email: string): Observable<any> {
    const url = `api/users/email/?q=${email}`;
    return this.http.get(url).pipe(map(data => {
      return data;
    },
      () => {
        // Error Has been captured by interceptor
      }
    ));
  }
  update(
    { userId, fieldName, fieldNewValue }: { userId: number, fieldName: string, fieldNewValue: string; }
  ): Observable<any> {
    const data: any = {
      [fieldName]: fieldNewValue
    }
    return this.http.patch(`api/users/${userId}`, data)
  }
  
  uploadPhoto({ file }: { file: File; }): Observable<any> {
    
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('profilePicture', file);

    return this.http.post('api/users/profile-picture', myFormData, {
      headers
    });
  }
  
  saveProfilePicture({ userId, profilePicId}: {userId: number, profilePicId: number}): Observable<any> {
    const data: any = {
      
      'profile_pic_id': profilePicId
    }
    return this.http.patch(`api/users/${userId}`, data)
  }
  
  getProfilePicture({ userId }: { userId: number; }) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    headers.append('Content-Type', 'application/pdf');
    return this.http.get(`api/users/profile-picture/${userId}`, { headers, responseType: 'blob' })
  }
}
