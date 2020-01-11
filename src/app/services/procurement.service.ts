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
    return this.http.get('api/procurements/item-categories');
  }
  getMyRequests(): Observable<any> {
    return this.http.get('api/procurements/my-requests');
  }
  makeNewProcurementRequest(data: any): Observable<any>  {
    return this.http.post('api/procurements/requests', {
      name: data.name,
      quantity_description: data.quantity,
      description: data.description,
      procurement_items_category_id: data.category
    });
  }
  deleteProcurementRequest(id: number): Observable<any> {
    return this.http.delete(`api/procurements/requests/${id}`);
  }
  getProcurementRequestWithId(id: number) {
    return this.http.get(`api/procurements/requests/${id}`);
  }
}
