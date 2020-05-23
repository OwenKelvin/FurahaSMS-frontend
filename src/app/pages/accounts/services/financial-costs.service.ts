import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialCostsService {
  url: string = 'api/accounts/financial-costs';
  
  destroy(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  all$: Observable<any> = this.http.get(this.url);

  save(financialCosts: any[]) {
    const url = '${this.url}';
    return this.http.post(url, financialCosts);
  }

  constructor(
    private http: HttpClient
  ) { }
}
