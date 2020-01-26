import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookTagService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('/api/library-books/tags/all');
  }
  save(data): Observable<any> {
    if (data.id === 0) {
      return this.http.post('api/library-book-tag', data);
    } else {
      return this.http.patch(`api/library-book-tag/${data.id}`, data);
    }
  }
  deleteItem(id): Observable<any> {
    return this.http.delete(`api/library-book-tag/${id}`);
  }
  getTagWithId(id) {
    return this.http.get(`api/library-book-tag/${id}`);
  }
}
