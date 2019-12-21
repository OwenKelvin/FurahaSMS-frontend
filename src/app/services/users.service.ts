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
      error => {
        // Error Has been captured by interceptor
      }
    ));
  }
}
