import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookClassesService {

  constructor(private http: HttpClient) {
  }

  getClass({classification, libraryClass}: any): Observable<any> {
    let url = `api/library-books/classifications/${classification}/classes?`;
    if (libraryClass) {
      url += `library_class=${libraryClass}`;
      return this.http.get(url);
    }
    url += `flat=1`;
    return this.http.get(url);
  }
}
