import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkLoadingService {

  isLoadingSubject$ = new Subject<boolean>();

  show = () => this.isLoadingSubject$.next(true);
  hide = () => this.isLoadingSubject$.next(false);

  constructor() { }
}
