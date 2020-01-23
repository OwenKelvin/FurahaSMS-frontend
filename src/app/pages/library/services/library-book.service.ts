import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookService {

  constructor() { }
  
  save(data): Observable<any> {
    return of (data)
  }
}
