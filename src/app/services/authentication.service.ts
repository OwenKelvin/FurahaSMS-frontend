import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { OauthInterface } from './../interfaces/oauth.interface';
import { PASSPORT_CLIENT } from './../configs/app.config';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  contactAdmin(data: {email: string}) {
    return of({
      message: 'Successfully Contacted Admin'
    });
  }
  resetPassword(data: {email: string}) {
    return of({
      message: 'Password Reset Successful'
    });
  }
  login(data: { username: string, password: string }): Observable<any> {
    const { username, password } = data;
    const loginData: OauthInterface = {
      grant_type: PASSPORT_CLIENT.grantType,
      client_id: PASSPORT_CLIENT.clientId,
      client_secret: PASSPORT_CLIENT.clientSecret,
      username,
      password,
      scope: '',
    };
    const url = `api/oauth/token`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const userData = null;
    return this.http.post<any>(url, loginData, httpOptions)
      .pipe(
        map( response => {
          return response;
        }),
        catchError( error => {
          return throwError(error);
      })
    );
  }
  logout() {

  }
}
