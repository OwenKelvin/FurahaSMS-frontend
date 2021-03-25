import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperQuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  store({ examPaperId, data }: { examPaperId: number; data: any }): Observable<any> {
    return this.http.post(`api/academics/exam-papers/${ examPaperId }/questions`, data);
  }
}
