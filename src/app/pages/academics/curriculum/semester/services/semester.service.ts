import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  url = 'api/curriculum/semesters';

  constructor(
    private http: HttpClient
  ) { }
  all$: Observable<any>= this.http.get<any>(this.url);
  
  deleteItem(id: number): Observable<any> {
    const url = `api/curriculum/semesters/${id}`;
    return this.http.delete<any>(url);
  }
}
