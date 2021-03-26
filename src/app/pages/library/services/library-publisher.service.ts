import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectLibraryBookPublisher, selectLibraryBookPublishers} from '../store/selectors/library.selectors';
import {filter, map, tap} from 'rxjs/operators';
import {loadLibraryBookPublisher, loadLibraryBookPublishers} from '../store/actions/library-book-publisher.actions';

@Injectable({
  providedIn: 'root'
})
export class LibraryPublisherService {
  loadAll$: Observable<any> = this.store.pipe(
    select(selectLibraryBookPublishers),
    filter((a: any) => Object.keys(a)?.length < 2),
    tap(() => this.store.dispatch(loadLibraryBookPublishers())),
  );


  all$: Observable<any> = this.http.get('api/library-books/publishers/all');
  constructor(private http: HttpClient, private store: Store) {
  }

  loadItem = (id: number): Observable<any> => this.store.pipe(
      select(selectLibraryBookPublisher(id)),
      filter((a: any) => !a),
      map(() => this.store.dispatch(loadLibraryBookPublisher({data: {id}})))
    );

  save(data: any, file?: File): Observable<any> {
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('profilePicture', file ? file : '');

    Object.keys(data).forEach((item) => myFormData.append(item, data[item]));

    if (data.id === 0) {
      return this.http.post('api/library-book-publisher', myFormData, {headers});
    } else {
      return this.http.patch(`api/library-book-publisher/${data.id}`, myFormData, {headers});
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
