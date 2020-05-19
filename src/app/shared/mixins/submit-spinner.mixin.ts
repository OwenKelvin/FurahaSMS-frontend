import { Constructor } from './constructor.mixin';
import { BehaviorSubject } from 'rxjs';

export const submitMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass {
    submitInProgressSubject$ = new BehaviorSubject<boolean>(false);
    submitInProgressAction$ = this.submitInProgressSubject$.asObservable();
  };