import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClassLevelCategoryInterface } from '../interfaces/class-level-category.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelCategoryService {

  url = 'api/curriculum/class-level-categories';
  all$ = this.http.get<any>(this.url);

  constructor(private http: HttpClient) { }

  getCategoryWithId = (id: number) => this.http.get(`${this.url}/${id}`);



  get(data: { id: number; classLevel?: 0 | 1}) {
    const { id, classLevel } = data;
    let url = `${this.url}/${id}`;
    if (classLevel === 1) {
      url += '/?class_level=1';
    }
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }
  submit(data: ClassLevelCategoryInterface) {
    let url = this.url;
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, { ...data }).pipe(
        map(res => res)
      );
    } else {
      return this.http.post<any>(url, { ...data}).pipe(
        map(res => res)
      );
    }
  }
  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => res)
    );
  }
  deleteItem(id: number): Observable<any> {
    return this.delete(id);
  }
}
