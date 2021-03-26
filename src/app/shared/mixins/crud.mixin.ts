import { Constructor } from './constructor.mixin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';

export const crudMixin = <T extends Constructor>(baseClass: T = class { } as T) =>
  class extends baseClass {
    tranforms: TransformInterface[] = [];
    url = '';
    http: HttpClient;
    constructor(..._args: any[]) {
      super();
      this.http = _args[0];
    }

    get all$(): Observable<any[]> {
      return this.http.get(this.url).pipe(
        map(res => res as any),
        shareReplay()
      );;
    };
    get active$(): Observable<any[]> {
      return this.http.get(`${this.url}/?active=${true}`).pipe(
        map(res => res as any)
      );
    }

    getItemById(id: number): Observable<any> {
      return this.http.get(`${this.url}/${id}`);
    }

    deleteItem(id: number): Observable<any> {
      return this.http.delete(`${this.url}/${id}`);
    }

    submit(data: any) {
      const transformed = this.tranforms.reduce((prev, { to, from }) => ({ ...prev, [to]: data[from] }), {});
      if (data.id) {
        return this.http.patch<any>(`${this.url}/${data.id}`, { ...data, ...transformed });
      } else {
        return this.http.post<any>(this.url, { ...data, ...transformed });
      }
    }
  };
