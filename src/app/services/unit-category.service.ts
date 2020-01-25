import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UnitCategoryInterface } from '../interfaces/unit-category.interface';

@Injectable({
  providedIn: 'root'
})
export class UnitCategoryService {

  constructor(
    private http: HttpClient,
  ) { }
  getUnitCategoryWithId(id) {
    const url = `api/curriculum/unit-categories/${id}?units=1`;
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<UnitCategoryInterface>;
  }
  get(data) {
    const { units, id } = data;
    const url = `api/curriculum/unit-categories/${id}?units=1`;
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<UnitCategoryInterface>;
  }
  getActive() {
    const url = 'api/curriculum/unit-categories/?active=1';
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<UnitCategoryInterface[]>;
  }
  getAll(): Observable<UnitCategoryInterface[]> {
    const url = 'api/curriculum/unit-categories';
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<UnitCategoryInterface[]>;
  }
  deleteItem(id): Observable<any> {
    const url = `api/curriculum/unit-categories/${id}`;
    return this.http.delete<any>(url).pipe(map(res => {
      return res;
    }));
  }
  submit(data: any): Observable<any> {
    let url = 'api/curriculum/unit-categories';
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, data).pipe(map(res => {
        return res;
      }));
    } else {
      return this.http.post<any>(url, data).pipe(map(res => {
        return res;
      }));
    }
  }
}
