import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../interfaces/course.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ELearningService {
  saveCourseTopicsLearningOutcome(value: any): Observable<any> {
    const { topicId } = value;
    const postData = {
      description: value.description
    };
    return this.http.post(`api/e-learning/course-content/topics/${topicId}/learning-outcomes`, postData);
  }
  saveCourseContent({ studyMaterialId, data }: { studyMaterialId: number; data: { eLearningTopicId: number}; }): Observable<any> {
    const postData = {
      study_material_id: studyMaterialId,
      e_learning_topic_id: data.eLearningTopicId
    };
    return this.http.post('api/e-learning/course-content', postData);
  }
  deleteCourseWithId(id: number): Observable<any> {
    return this.http.delete(`api/e-learning/courses/${id}`);
  }
  constructor(private http: HttpClient) { }

  getCourseWithId(id: number): Observable<ICourse> {
    return this.http.get(`api/e-learning/courses/${id}`)
      .pipe(map((res: any) => {
        return {
          name: res.name,
          classLevelId: res.class_level_id,
          classLevelName: res.class_level_name,
          classLevelAbbreviation: res.class_level_abbreviation,
          id: res.id,
          unitName: res.unit_name,
          unitId: res.unit_id,
          unitAbbreviation: res.unit_abbreviation,
          academicYearName: res.academic_year_name,
          topicNumberStyleName: res.topic_number_style_name,
          topics: res.topics
        };
      }));
  }

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
    const queryStringParams = stringify({ limit });
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
