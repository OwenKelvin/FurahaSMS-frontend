import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
// const PouchDB = require('pouchdb').default;

@Injectable({
  providedIn: 'root'
})
export class DbService {
  db: any;
  constructor() {
    this.db = new PouchDB('libraryClassifications');
  }

  get(data: any) {
    return this.db.get(data);
  }
  put(data: any) {
    return this.db.put(data);
  }
}
