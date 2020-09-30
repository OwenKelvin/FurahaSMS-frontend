import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineAssessmentService {
  urlWithId = (topicId: number, assessmentId: number) =>
    `api/e-learning/course-content/topics/${topicId}/online-assessments${assessmentId ? `/${assessmentId}` : ''}`;

  constructor(private http: HttpClient) {
  }

  save = ({topicId, data, assessmentId}: any) => this.http.post(this.urlWithId(topicId, assessmentId), {
    available_at: data.availableDateTime,
    closing_at: data.closedDateTime,
    period: data.period,
    name: data.name,
    _method: data.id > 0 ? 'PATCH' : 'POST'
  })
}
