import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { OauthInterface } from './../interfaces/oauth.interface';
import { UserInterface } from './../interfaces/user.interface';
import { PASSPORT_CLIENT } from './../configs/app.config';
import { map, catchError, tap } from 'rxjs/operators';
import { IUserProfile } from '../interfaces/user-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    let storedUser: any = JSON.parse(String(sessionStorage.getItem('currentUser')));
    if (!storedUser) {
      storedUser = JSON.parse(String(localStorage.getItem('currentUser')));
    }

    this.currentUserSubject = new BehaviorSubject<UserInterface>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get authorizationToken(): string | undefined {
    const currentUser = JSON.parse(String(sessionStorage.getItem('currentUser')));
    if (!currentUser) {
      JSON.parse(String(localStorage.getItem('currentUser')));
    }
    if (currentUser) {
      return `Bearer ${currentUser.access_token}`;
    }
    return;
  }
  public get currentUserValue(): UserInterface | null {
    return this.currentUserSubject.value;
  }
  public get currentUserProfile$(): Observable<IUserProfile> {
    return this.http.get('api/users/auth')
      .pipe(map((res: any) => {
        return {
          ...res,
          id: res.id,
          firstName: res.first_name,
          lastName: res.last_name,
          middleName: res.middle_name,
          otherNames: res.other_names,
          phone: res.phone,
          email: res.email,
          dateOfBirth: res.date_of_birth,
          religionName: res.religion_name,
          genderName: res.gender_name
        };
      }));
  }
  private currentUserSubject: BehaviorSubject<UserInterface | null>;
  public currentUser: Observable<UserInterface | null>;
  changePassword(data: any) {
    const submitData = {
      token: data.token,
      old_password: data.oldPassword,
      new_password: data.newPassword,
      new_password_confirmation: data.newPasswordConfirmation,
    };
    return this.http.post('api/password/reset', submitData);
  }
  tokenLogin(data: { token: string; }): Observable<any> {
    const url = `api/password/token`;
    return this.http.post<any>(url, data)
      .pipe(
        map(user => {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return { ...user, ...data };
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }
  contactAdmin(_data: { email: string; }) {
    // TODO-me Authentication Service Contact admin
    return of({
      message: 'Feature coming soon'
    });
  }
  resetPassword(email: { email: string; }) {
    return this.http.post('api/password/email', email);
  }
  login(data: { username: string, password: string; rememberMe: boolean; }): Observable<any> {
    const { username, password, rememberMe } = data;
    const loginData: OauthInterface = {
      grant_type: PASSPORT_CLIENT.grantType,
      client_id: PASSPORT_CLIENT.clientId,
      client_secret: PASSPORT_CLIENT.clientSecret,
      username,
      password,
      scope: '',
    };
    const url = `api/oauth/token`;

    return this.http.post<any>(url, loginData)
      .pipe(
        tap((user) => rememberMe ? localStorage.setItem('currentUser', JSON.stringify(user)) : ''),
        tap((user) => !rememberMe ? sessionStorage.setItem('currentUser', JSON.stringify(user)) : ''),
        tap((user) => this.currentUserSubject.next(user)),
        catchError(error => {
          return throwError(error);
        })
      );
  }
  logout(): Observable<any> {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return this.revokeToken;
  }
  revokeToken: Observable<any> = this.http.get('api/users/auth/logout');
}
