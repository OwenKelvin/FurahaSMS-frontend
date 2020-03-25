import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  constructor( private http: HttpClient) { }
  getAll(): Observable<any> {
    const url = 'api/religions/all';
    return this.http.get<any>(url)
      .pipe(map(data => {
        return data;
      },
        () => {
          // Error Has been captured by interceptor
        }
      ));
  }
}
