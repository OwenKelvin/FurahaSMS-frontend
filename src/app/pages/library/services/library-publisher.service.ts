import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryPublisherService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('api/library-books/publishers/all');
  }
  save(data: any): Observable<any> {
    if (data.id === 0) {
      return this.http.post('api/library-book-publisher', data);
    } else {
      return this.http.patch(`api/library-book-publisher/${data.id}`, data);
    }
  }
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`api/library-book-publisher/${id}`);
  }
  getPublisherWithId(id: number) {
    return this.http.get(`api/library-book-publisher/${id}`);
  }
  filter(searchString: string | null) {
    return this.http.get(`api/library-books/publishers/filter/?name=${searchString}`);
  }
}
