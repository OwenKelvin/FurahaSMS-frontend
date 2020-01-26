import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookService {

  constructor(private http: HttpClient) { }

  save(data): Observable<any> {
    const subData = {
      ...data,
      title: data.bookTitle,
      book_items: data.bookItems
    };
    return this.http.post('api/library-books', subData);
  }
  getBookWithId(id: number): Observable<any> {
    return this.http.get(`api/library-books/${id}`);
  }
}
