import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { crudMixin } from 'src/app/shared/mixins/crud.mixin';

@Injectable({
  providedIn: 'root'
})
export class SemesterService extends crudMixin() {

  url = 'api/curriculum/semesters';

  constructor(_http: HttpClient) {
    super(_http);
    this.http = _http;
  }
}
