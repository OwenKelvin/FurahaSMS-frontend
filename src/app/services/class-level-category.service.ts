import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClassLevelCategoryInterface } from '../interfaces/class-level-category.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelCategoryService {
  constructor(private http: HttpClient) { }
  getAll() {
    const url = 'api/curriculum/class-level-categories';
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  get(data: { id: number, classLevel?: 0 | 1}) {
    const { id, classLevel } = data;
    let url = `api/curriculum/class-level-categories/${id}`;
    if (classLevel === 1) {
      url += '/?class_level=1';
    }
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  submit(data: ClassLevelCategoryInterface) {
    let url = 'api/curriculum/class-level-categories';
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, { ...data }).pipe(
        map(res => {
          return res;
        })
      );
    } else {
      return this.http.post<any>(url, { ...data}).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  delete(id: number): Observable<any> {
    const url = `api/curriculum/class-level-categories/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}
