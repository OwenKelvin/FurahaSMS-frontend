import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, EMPTY, Observable, of, throwError} from 'rxjs';
import {OauthInterface} from '../interfaces/oauth.interface';
import {UserInterface} from '../interfaces/user.interface';
import {catchError, map, tap} from 'rxjs/operators';
import {IUserProfile} from '../interfaces/user-profile.interface';
import {environment} from 'src/environments/environment';

const PASSPORT_CLIENT = environment.passportClient;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUserSubject: BehaviorSubject<UserInterface | null> = new BehaviorSubject<UserInterface | null>(null);
  currentUser = this.currentUserSubject.asObservable();
  localStorageUser = JSON.parse(String(localStorage.getItem('currentUser')));
  sessionStorageUser = JSON.parse(String(sessionStorage.getItem('currentUser')));
  isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  revokeToken: Observable<any> = this.http.get('api/users/auth/logout');
  constructor(private http: HttpClient) {
    this.isLoggedInSubject.next(!!this.authorizationToken);
  }

  get authorizationToken(): string | undefined {

    if (this.sessionStorageUser) {
      return `Bearer ${this.sessionStorageUser.access_token}`;
    }
    if (this.localStorageUser) {
      return `Bearer ${this.localStorageUser.access_token}`;
    }
    return;
  }

  public get currentUserValue(): UserInterface | null {
    return this.currentUserSubject.value;
  }

  public get currentUserProfile$(): Observable<IUserProfile> {
    if (!this.isLoggedInSubject.value) {
      return EMPTY;
    }

    return this.http.get('api/users/auth')
      .pipe(
        catchError(error => {
          if (error.status === 401) {
            this.clearStorage();
          }

          return throwError(error);
        }),
        map((res: any) => ({
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
        })));
  }

  changePassword(data: any) {
    const submitData = {
      token: data.token,
      ['old_password']: data.oldPassword,
      ['new_password']: data.newPassword,
      ['new_password_confirmation']: data.newPasswordConfirmation,
    };
    return this.http.post('api/password/reset', submitData);
  }

  tokenLogin(data: { token: string }): Observable<any> {
    const url = `api/password/token`;
    return this.http.post<any>(url, data)
      .pipe(
        map(user => {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return {...user, ...data};
        }),
        catchError(error => throwError(error))
      );
  }

  contactAdmin(_data: { email: string }) {
    // TODO-me Authentication Service Contact admin
    return of({
      message: 'Feature coming soon'
    });
  }

  resetPassword(email: { email: string }) {
    return this.http.post('api/password/email', email);
  }

  login(data: { username: string; password: string; rememberMe: boolean }): Observable<any> {
    const {username, password, rememberMe} = data;
    const loginData: OauthInterface = {
      ['grant_type']: PASSPORT_CLIENT.grantType,
      ['client_id']: PASSPORT_CLIENT.clientId,
      ['client_secret']: PASSPORT_CLIENT.clientSecret,
      username,
      password,
      scope: '',
    };
    const url = `api/oauth/token`;

    return this.http.post<any>(url, loginData)
      .pipe(
        tap(user => rememberMe ? localStorage.setItem('currentUser', JSON.stringify(user)) : ''),
        tap(user => !rememberMe ? sessionStorage.setItem('currentUser', JSON.stringify(user)) : ''),
        tap(user => this.currentUserSubject.next(user)),
        tap(() => this.isLoggedInSubject.next(true)),
        catchError(error => throwError(error))
      );
  }

  clearStorage = () => {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isLoggedInSubject.next(false);
  };

  logout(): Observable<any> {
    if (!this.isLoggedInSubject.value) {
      return EMPTY;
    }

    return this.revokeToken.pipe(
      catchError(() => EMPTY),
      tap(this.clearStorage)
    );
  }
}
