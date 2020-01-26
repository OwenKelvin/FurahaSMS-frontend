import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb/dist/pouchdb';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  db: any;
  constructor(


  ) { this.db = new PouchDB('libraryClassifications'); }

  get(data) {
    return this.db.get(data);
  }
  put(data) {
    return this.db.put(data);
  }
}
