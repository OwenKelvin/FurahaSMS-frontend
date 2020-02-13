import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<any> {
    const url = 'api/curriculum/semesters';
    return this.http.get<any>(url);
  }
  deleteItem(id: number): Observable<any> {
    const url = `api/curriculum/semesters/${id}`;
    return this.http.delete<any>(url);
  }
}
