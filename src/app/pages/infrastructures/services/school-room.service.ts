import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolRoomService {
  
  url = 'api/school-rooms';

  constructor(private http: HttpClient) { }
  
  allAvailableClassRooms$ = this.http.get<any[]>(this.url)
}
