import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class UrlParamsStringifyService {

  constructor() { }
  stringify(data: {[id: string]: any }) {
    return Object.entries(data).reduce(
      (prev, next) =>
        Array.isArray(next[1]) ? [...prev, ...next[1].map(item => ([next[0] + '[]', item]))] : [...prev, next]
      , [])
      .map(item => ([item[0], item[1] ? item[1]: '']))
      .map(item => `${item[0]}=${encodeURIComponent(item[1])}`).join('&');
  }
}
