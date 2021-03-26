import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookService {
  all$: Observable<any> = this.http.get(`api/library-books`);

  constructor(private http: HttpClient) {
  }

  save(data: any): Observable<any> {
    const subData = {
      ...data,
      title: data.bookTitle,
      ['book_items']: data.bookItems
    };
    return this.http.post('api/library-books', subData);
  }

  getBookWithId(id: number): Observable<any> {
    return this.http.get(`api/library-books/${id}`);
  }

  filter(params: any): Observable<any[]> {
    return this.http.get<any[]>(`api/library-books/filter`, {params});
  }
}
