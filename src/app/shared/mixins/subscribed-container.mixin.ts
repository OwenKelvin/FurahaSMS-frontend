import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export type Constructor<T = {}> = new (...args: any[]) => T;

export const subscribedContainerMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass implements OnDestroy {
    destroyed$ = new Subject<void>();
    
    ngOnDestroy(): void {
      this.destroyed$.next();
    }
  };