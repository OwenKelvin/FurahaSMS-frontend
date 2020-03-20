import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ICourse } from '../interfaces/course.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ELearningService {

  constructor(private http: HttpClient) { }
  saveCourse(value: any): Observable<any> {
    return this.http.post('api/e-learning/courses', {
      unit_id: value.unit,
      name: value.name,
      class_level_id: value.unit,
      academic_year_id: value.academicYearId,
    });
  }
  getCourses({ limit }: { limit: number; }): Observable<ICourse[]> {
    const querystring = require('querystring');
    const queryStringParams = querystring.stringify({ limit });
    return this.http.get(`api/e-learning/courses?${queryStringParams}`)
      .pipe(map((res: any) => res as ICourse[]));
  }
}
