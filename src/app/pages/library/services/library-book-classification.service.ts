import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookClassificationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('/api/library-books/classifications');
  }
  save(data: any): Observable<any> {
    if (data.id === 0) {
      return this.http.post('api/library-books/classifications', data);
    } else {
      return this.http.patch(`api/library-books/classifications/${data.id}`, data);
    }
  }
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`api/library-books/classifications/${id}`);
  }
  getPublisherWithId(id: number) {
    return this.http.get(`api/library-books/classifications/${id}`);
  }
}
