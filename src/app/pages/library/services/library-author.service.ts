import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryAuthorService {

  all$: Observable<any> = this.http.get('api/library-books/authors/all');
  constructor(private http: HttpClient) {
  }

  save(data: any): Observable<any> {
    if (data.id === 0) {
      return this.http.post('api/library-book-author', data);
    } else {
      return this.http.patch(`api/library-book-author/${data.id}`, data);
    }
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`api/library-book-author/${id}`);
  }

  getAuthorWithId(id: number) {
    return this.http.get(`api/library-book-author/${id}`);
  }

  filter(searchString: string) {
    return this.http.get(`api/library-books/authors/filter?name=${searchString}`);
  }
}
