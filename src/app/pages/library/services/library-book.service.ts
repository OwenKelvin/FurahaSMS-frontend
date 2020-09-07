import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookService {

  constructor(private http: HttpClient) {
  }

  all$: Observable<any> = this.http.get(`api/library-books`);

  save(data: any): Observable<any> {
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

  filter(params: any): Observable<any[]> {

    const queryString = stringify(params);

    return this.http.get<any[]>(`api/library-books/filter?${queryString}`);
  }
}
