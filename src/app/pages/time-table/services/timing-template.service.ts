import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimingTemplateService {

  url = 'api/time-table/time-table-timing-templates';
  all$ = this.http.get<any[]>(this.url).pipe(shareReplay());
  constructor(private http: HttpClient) { }



  store = (data: any) => this.http.post( this.url, data);
}
