import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookClassesService {

  constructor(private http: HttpClient) { }
  getClass({ classification }): Observable<any> {
    return this.http.get(`api/library-books/classifications/${classification}/classes?flat=1`)
  }
}
