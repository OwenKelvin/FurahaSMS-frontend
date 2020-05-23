import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicNumberingService {

  constructor(
    private http: HttpClient
  ) { }

  all$ = this.http.get('api/e-learning/topic-numbering')
  
}
