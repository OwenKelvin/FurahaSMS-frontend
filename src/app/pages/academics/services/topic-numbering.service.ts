import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicNumberingService {
  all$ = this.http.get<any[]>('api/e-learning/topic-numbering');

  constructor(
    private http: HttpClient
  ) {
  }


}
