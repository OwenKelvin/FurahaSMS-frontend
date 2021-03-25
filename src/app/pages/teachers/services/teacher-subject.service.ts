import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(teacherId: number) {
    return this.http.get<any[]>(`api/teachers/${teacherId}/subjects`);
  }
  saveSubjects(teacherId: number, data: any) {
    return this.http.post(`api/teachers/${teacherId}/subjects`, data);
  }
}
