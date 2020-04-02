import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryPublisherService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('api/library-books/publishers/all');
  }
  save(data: any, file?: File): Observable<any> {
    
    
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('profilePicture', file ? file : '');
    
    Object.keys(data).forEach((item) => myFormData.append(item, data[item]) )
    ;
    
    if (data.id === 0) {
      return this.http.post('api/library-book-publisher', myFormData, { headers });
    } else {
      return this.http.patch(`api/library-book-publisher/${data.id}`, myFormData, { headers });
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
