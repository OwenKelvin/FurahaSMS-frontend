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
  private currentUserSubject: BehaviorSubject<UserInterface | null>;
  public currentUser: Observable<UserInterface | null>;
  constructor( private http: HttpClient ) {
    const storedUser: any = JSON.parse(String(localStorage.getItem('currentUser')));

    this.currentUserSubject = new BehaviorSubject<UserInterface>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get authorizationToken(): string | undefined {
    const currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
    if (currentUser) {
      return `Bearer ${currentUser.access_token}`;
    }
    return;
  }
  public get currentUserValue(): UserInterface | null {
    return this.currentUserSubject.value;
  }
  contactAdmin(data: { email: string }) {
    // TODO-me Authentication Service Contact admin
    return of({
      message: 'Successfully Contacted Admin'
    });
  }
  resetPassword(data: { email: string }) {
    // TODO-me Authentication Service reset Password
    return of({
      message: 'Password Reset Successful'
    });
  }
  login(data: { username: string, password: string; }): Observable<any> {
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
    return this.http.post<any>(url, loginData, httpOptions)
      .pipe(
        map( user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError(error => {
          return throwError(error);
      })
    );
  }
  logout(): Observable<any> {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return this.revokeToken();
  }
  revokeToken(): Observable<any> {
    // TODO-me Authentication Service send request to invalidate token
    return of(true);
  }
}
