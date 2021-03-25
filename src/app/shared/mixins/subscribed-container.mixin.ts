import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Constructor } from './constructor.mixin';

export const subscribedContainerMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass implements OnDestroy {
    destroyed$ = new Subject<void>();

    ngOnDestroy(): void {
      this.destroyed$.next();
    }
  };
