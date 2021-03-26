import { Constructor } from './constructor.mixin';
import { BehaviorSubject } from 'rxjs';

export const loadingMixin = <T extends Constructor>(baseClass: T = class { } as T) =>
  class extends baseClass {
    loadingSubject$ = new BehaviorSubject<boolean | undefined>(false);
    loadingAction$ = this.loadingSubject$.asObservable();
  };
