import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelUnitLevelAllocationService {

  constructor(private http: HttpClient) {
  }
  url = 'api/class-levels?units=1';
  getAll = () => this.http.get(this.url);
}

