import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {

  constructor(
    private http: HttpClient
  ) { }
  getItemCaterories(): Observable<any> {
    return of([
      { id: 1, name: 'School Uniform'}
    ]);
  }
  makeNewProcurementRequest(data: any): Observable<any>  {
    return this.http.post('api/procurements/request', data);
  }
}
