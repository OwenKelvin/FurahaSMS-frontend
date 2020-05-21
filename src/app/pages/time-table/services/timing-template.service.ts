import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimingTemplateService {

  url = 'api/time-table/time-table-timing-templates';
  all$ = this.http.get(this.url)
  constructor(private http: HttpClient) { }

  

  store = (data: any) => this.http.post( this.url, data);
}
