import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { OauthInterface } from './../interfaces/oauth.interface';
import { UserInterface } from './../interfaces/user.interface';
import { PASSPORT_CLIENT } from './../configs/app.config';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserInterface>;
  public currentUser: Observable<UserInterface>;
  constructor( private http: HttpClient ) {
    const storedUser = localStorage.getItem('currentUser');

    this.currentUserSubject = new BehaviorSubject<UserInterface>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UserInterface {
    return this.currentUserSubject.value;
  }
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
        map( user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError( error => {
          return throwError(error);
      })
    );
  }
  logout() {

  }
}
