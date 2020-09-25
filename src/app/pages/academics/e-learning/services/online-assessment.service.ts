import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineAssessmentService {
  urlWithId = (topicId: number, assessmentId: number) =>
    `api/e-learning/course-content/topics/${topicId}/learning-outcomes${assessmentId ? `/${assessmentId}` : ''}`;

  constructor(private http: HttpClient) {
  }

  save = ({topicId, data, assessmentId}: any) => this.http.post(this.urlWithId(topicId, assessmentId), {
    ...data,
    _method: data.id > 0 ? 'POST' : 'PATCH'
  })
}
