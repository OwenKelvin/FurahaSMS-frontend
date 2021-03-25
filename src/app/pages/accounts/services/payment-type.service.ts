import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectPaymentMethods } from '../store/selectors/payment-type.selectors';
import { tap, filter } from 'rxjs/operators';
import { loadPaymentTypes } from '../store/actions/payment-type.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  loadAll$: Observable<any> = this.store.pipe(
    select(selectPaymentMethods),
    filter(res => Object.keys(res).length < 1),
    tap(() => this.store.dispatch(loadPaymentTypes()))
  );
  all$: Observable<any> = this.http.get('api/accounts/payment-methods?active=true');
  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) { }
}
