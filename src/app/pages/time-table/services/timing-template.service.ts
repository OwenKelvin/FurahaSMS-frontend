import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimingTemplateService {

  constructor(private http: HttpClient) { }

  url = 'api/time-table/time-table-timing-templates';

  store = (data: any) => this.http.post( this.url, data);
}
