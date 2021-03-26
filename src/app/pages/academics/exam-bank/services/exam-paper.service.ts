import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperService {
  constructor(
    private http: HttpClient
  ) { }
  getRecentExamPapers(): Observable<any> {
    return this.http.get('api/academics/exam-papers/?latest=20');
  }
  getExamPaperWithId(id: number): Observable<any> {
    return this.http.get(`api/academics/exam-papers/${id}`);
  }
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`api/academics/exam-papers/${id}`);
  }

  save(data: any): Observable<any> {
    return this.http.post('api/academics/exam-papers', data);
  }
  getByFilter(params: any): Observable<any> {
    const url = 'api/academics/exam-papers';
    const queryString = stringify(params);
    return this.http.get<any[]>(`${url}?${queryString}`)
      .pipe(map(res => res.map(item => ({ ...item, unitLevelName: item.unit_level_name }))));
  }
}
