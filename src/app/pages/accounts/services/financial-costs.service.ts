import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialCostsService {
  destroy(id: any): Observable<any> {
    const url = `api/accounts/financial-costs/${id}`;
    return this.http.delete(url);
  }

  getAll(): Observable<any> {
    const url = 'api/accounts/financial-costs';
    return this.http.get(url);
  }

  save(financialCosts: any[]) {
    console.log(financialCosts);

    const url = 'api/accounts/financial-costs';
    return this.http.post(url, financialCosts);
  }

  constructor(
    private http: HttpClient
  ) { }
}
