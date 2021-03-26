import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolRoomService {

  url = 'api/school-rooms';
  allAvailableClassRooms$ = this.http.get<any[]>(this.url).pipe(shareReplay());

  constructor(private http: HttpClient) {
  }

}
