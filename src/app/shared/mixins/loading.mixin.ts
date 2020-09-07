import { Constructor } from './constructor.mixin';
import { BehaviorSubject } from 'rxjs';

export const loadingMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass {
    loadingSubject$ = new BehaviorSubject<boolean | undefined>(false);
    loadingAction$ = this.loadingSubject$.asObservable();
  };
