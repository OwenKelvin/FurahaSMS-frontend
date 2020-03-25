import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAcademicsService {

  getFeesStatementForStudentWithId(studentId: number): any {
    const url = `api/students/${studentId}/fee-statement`;
    return this.http.get(url);
  }
  getForStudentWithId(studentId: number): any {
    const url = `api/students/${studentId}/academics`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }
  saveSubjectAllocation({studentId, data} : any): Observable<any> {
    const url = `api/students/${studentId}/academics`;
    return this.http.post(url, data);
  }
}
