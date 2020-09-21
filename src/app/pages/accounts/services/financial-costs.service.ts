import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialCostsService {

  constructor(
    private http: HttpClient
  ) { }
  url = 'api/accounts/financial-costs';

  all$: Observable<any> = this.http.get<any[]>(this.url);

  destroy(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  save(financialCosts: any[]) {
    const url = `${this.url}`;
    return this.http.post(url, financialCosts);
  }
}
