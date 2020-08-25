import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassStreamService {

  all$: Observable<any[]> = this.http.get<any[]>('api/class-streams').pipe(
    shareReplay()
  );

  constructor(private http: HttpClient) { }
}
