import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineAssessmentService {

  constructor(private http: HttpClient) {
  }

  urlWithId = (topicId: number, assessmentId: number) =>
    `api/e-learning/course-content/topics/${topicId}/online-assessments${assessmentId ? `/${assessmentId}` : ''}`;

  save = ({topicId, data, assessmentId}: any) => this.http.post(this.urlWithId(topicId, assessmentId), {
    ['available_at']: data.availableDateTime,
    ['closing_at']: data.closedDateTime,
    period: data.period,
    name: data.name,
    _method: data.id > 0 ? 'PATCH' : 'POST'
  });

  deleteAssessmentWithId = ({topicId, assessmentId}: any) => this.http.delete(this.urlWithId(topicId, assessmentId));

  getAssessmentWithId = (assessmentId: number) => this.http.get<{ [key: string]: any }>(this.urlWithId(0, assessmentId));
}
