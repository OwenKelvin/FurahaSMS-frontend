import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryAuthorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('/api/library-books/authors/all');
  }
  save(data): Observable<any> {
    if (data.id === 0) {
      return this.http.post('api/library-book-author', data);
    } else {
      return this.http.patch(`api/library-book-author/${data.id}`, data);
    }
  }
  deleteItem(id): Observable<any> {
    return this.http.delete(`api/library-book-author/${id}`);
  }
  getAuthorWithId(id) {
    return this.http.get(`api/library-book-author/${id}`);
  }
  filter(searchString) {
    return this.http.get(`api/library-books/authors/filter?name=${searchString}`);
  }
}
