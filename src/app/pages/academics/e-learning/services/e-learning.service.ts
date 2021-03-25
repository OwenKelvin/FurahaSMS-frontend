import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ICourse} from '../interfaces/course.interface';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UrlParamsStringifyService} from '../../../../shared/url-params-stringify/services/url-params-stringify.service';

interface IParams {
  topicId: number;
  learningOutcomeId?: number;
  description?: number;
  contentId?: number;
  data?: any;
  studyMaterialId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ELearningService {
  constructor(private http: HttpClient, private urlParam: UrlParamsStringifyService) {
  }
  updateCourseTopicsLearningOutcome({topicId, description, learningOutcomeId}: IParams): Observable<any> {
    const postData = {
      description,
      _method: 'PATCH'
    };
    return this.http.post(`api/e-learning/course-content/topics/${topicId}/learning-outcomes/${learningOutcomeId}`, postData);
  }

  saveCourseTopicsLearningOutcome(value: any): Observable<any> {
    const {topicId} = value;
    const postData = {
      description: value.description
    };
    return this.http.post(`api/e-learning/course-content/topics/${topicId}/learning-outcomes`, postData);
  }

  saveCourseContent({studyMaterialId, data}: { studyMaterialId: number; data: { eLearningTopicId: number } }): Observable<any> {
    const postData = {
      ['study_material_id']: studyMaterialId,
      ['e_learning_topic_id']: data.eLearningTopicId
    };
    return this.http.post('api/e-learning/course-content', postData);
  }

  deleteCourseWithId(id: number): Observable<any> {
    return this.http.delete(`api/e-learning/courses/${id}`);
  }

  mapToICourse = (res: any): ICourse => ({
    name: res.name,
    description: res.description,
    classLevelId: res.class_level_id,
    unitLevelId: res.unit_level_id,
    classLevelName: res.class_level_name,
    classLevelAbbreviation: res.class_level_abbreviation,
    id: res.id,
    unitName: res.unit_name,
    unitId: res.unit_id,
    unitAbbreviation: res.unit_abbreviation,
    academicYearId: res.academic_year_id,
    academicYearName: res.academic_year_name,
    topicNumberStyleName: res.topic_number_style_name,
    topics: res.topics
  });

  getCourseWithId(id: number): Observable<ICourse> {
    return this.http.get(`api/e-learning/courses/${id}`)
      .pipe(map(this.mapToICourse));
  }

  saveCourse(value: any): Observable<any> {
    const url = 'api/e-learning/courses';
    const data = {
      ['unit_id']: value.unit,
      name: value.name,
      ['class_level_id']: value.unit,
      ['unit_level_id']: value.unitLevel,
      ['academic_year_id']: value.academicYear,
      description: value.description,
      numbering: value.numbering,
      topics: value.topics
        .map(({description, numbering, subTopics, id}: any) => ({
          id,
          description,
          ['number_label']: numbering,
          ['sub_topics']: subTopics
        }))

    };
    if (value.id >= 0) {
      return this.http.post(`${url}/${value.id}`, {...data, _method: 'PATCH'});
    } else {
      return this.http.post(url, data);
    }
  }

  getCourses({limit}: { limit: number }): Observable<ICourse[]> {
    const queryStringParams = this.urlParam.stringify({limit});
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
        }));
        return data;
      }));
  }

  deleteCourseTopicsLearningOutcome = ({topicId, learningOutcomeId}: IParams) =>
    this.http.delete(`api/e-learning/course-content/topics/${topicId}/learning-outcomes/${learningOutcomeId}`);

  deleteCourseContent = ({topicId, studyMaterialId, contentId}: IParams) =>
    this.http.delete(
      `api/e-learning/course-content/${contentId}?e_learning_topic_id=${topicId}&study_material_id=${studyMaterialId}`);

  updateCourseContent = ({contentId, topicId, studyMaterialId, data}: IParams) =>
    this.http.post(`api/e-learning/course-content/${contentId}`, {
      _method: 'PATCH',
      ['e_learning_topic_id']: topicId,
      ['study_material_id']: studyMaterialId,
      ...data
    });
}
