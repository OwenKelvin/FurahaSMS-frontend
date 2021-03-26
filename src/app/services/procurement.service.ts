import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {
  allMyRequest$ = this.http.get('api/procurements/my-requests');

  constructor(
    private http: HttpClient
  ) {
  }


  getItemCategories(): Observable<any> {
    return this.http.get('api/procurements/item-categories');
  }

  saveProcurementRequest(data: any): Observable<any> {
    const submitData = {
      name: data.name,
      ['quantity_description']: data.quantity,
      description: data.description,
      ['procurement_items_category_id']: data.category
    };
    if (data.id === 0) {
      return this.http.post('api/procurements/requests', submitData);
    }
    return this.http.patch(`api/procurements/requests/${data.id}`, submitData);
  }

  approveRequest(data: { ['procurement_request_id']: number; approve: boolean }): Observable<any> {
    return this.http.post('api/procurements/requests/pending-approval', data);
  }

  deleteProcurementRequest(id: number): Observable<any> {
    return this.http.delete(`api/procurements/requests/${id}`);
  }

  getProcurementRequestWithId(id: number): Observable<any> {
    return this.http.get<any>(`api/procurements/requests/${id}`).pipe(map(this.mapRequest));
  }

  mapRequest = (res: any) => ({
    ...res,
    user: res.requesting_user
  });

  getRequestsPendingApproval(): Observable<any[]> {
    return this.http.get<any[]>(`api/procurements/requests/pending-approval`).pipe(
      map(res => res.map(this.mapRequest))
    );
  }

  deleteVendor(id: number): Observable<any> {
    return this.http.delete(`api/procurements/vendors/${id}`);
  }

  getVendors(): Observable<any> {
    return this.http.get('api/procurements/vendors');
  }

  getVendor(id: number): Observable<any> {
    return this.http.get(`api/procurements/vendors/${id}`);
  }

  createNewVendor(data: any): Observable<any> {
    return this.http.post(`api/procurements/vendors`, {
      ...data,
      ['physical_address']: data.address,
      ['procurement_items_categories']: data.procurementItemsCategory
    });
  }

  getRequestsPendingTendering(): Observable<any> {
    return this.http.get(`api/procurements/requests/pending-tendering`);
  }

  createTender(data: any): Observable<any> {
    return this.http.post('api/procurements/tenders', data);
  }

  getRequestsTendered(): Observable<any> {
    return this.http.get('api/procurements/tenders/?tendered=1');
  }

  createBid({tenderId, data}: { tenderId: number; data: any }) {
    return this.http.post(`api/procurements/tenders/${tenderId}/bids`, {
      ...data,
      ['unit_description']: data.unitDescription,
      ['price_per_unit']: data.pricePerUnit,
      ['vendor_id']: data.vendorName,
    });
  }

  getBids({procurementRequestId}: { procurementRequestId: number }) {
    return this.http.get(`api/procurements/tenders/${procurementRequestId}/bids`);
  }

  awardBid({tenderId, bidId, data}: any) {
    return this.http.patch(`api/procurements/tenders/${tenderId}/bids/${bidId}`, data);

  }

  getAwardedTenders(): Observable<any> {
    return this.http.get('api/procurements/tenders/?awarded=1');
  }

  setFulfillment({tenderId, comment, fulfilled}: any): Observable<any> {
    return this.http.post(`api/procurements/tenders/${tenderId}/fulfilled`, {
      fulfilled,
      comment

    });
  }
}
