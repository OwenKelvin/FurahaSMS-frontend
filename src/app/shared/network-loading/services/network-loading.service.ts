import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkLoadingService {

  isLoadingSubject$ = new Subject<boolean>();
  isLoadingAction$ = this.isLoadingSubject$.asObservable();
  constructor() { }
  show = () => this.isLoadingSubject$.next(true);
  hide = () => this.isLoadingSubject$.next(false);
}
