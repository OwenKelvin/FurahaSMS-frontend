import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    const url = 'api/genders/all';
    return this.http.get<any>(url)
      .pipe(map(data => {
        return data;
      },
        error => {
          // Error Has been captured by interceptor
        }
      ));
  }
}
