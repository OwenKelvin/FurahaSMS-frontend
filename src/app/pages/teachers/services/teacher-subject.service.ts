import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(id: number) {
    return this.http.get<any[]>(`api/teachers/${id}/subjects`)
  }
}
