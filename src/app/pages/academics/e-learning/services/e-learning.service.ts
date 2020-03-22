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
      academic_year_id: value.academicYear,
      description: value.description,
      numbering: value.numbering,
      topics: value.topics
        .map(({ description, numberLabel, subTopics } : any) => ({
          description,
          number_label: numberLabel,
          sub_topics: subTopics
        }))

    });
  }
  getCourses({ limit }: { limit: number; }): Observable<ICourse[]> {
    const querystring = require('querystring');
    const queryStringParams = querystring.stringify({ limit });
    return this.http.get(`api/e-learning/courses?${queryStringParams}`)
      .pipe(map((res: any[]) => {
        const data: ICourse[] = res.map((item: any) => ({
          name: item.name,
          classLevelName: item.class_level_name,
          classLevelAbbreviation: item.class_level_abbreviation,
          id: item.id,
          unitName: item.unit_name,
          unitAbbreviation: item.unit_abbreviation,
          academicYearName: item.academic_year_name
        }))
        return data;
      }));
  }
}
