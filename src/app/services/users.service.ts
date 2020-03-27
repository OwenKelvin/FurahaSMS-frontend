import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
