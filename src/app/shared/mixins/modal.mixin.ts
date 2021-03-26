

import { Constructor } from './constructor.mixin';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Store, select } from '@ngrx/store';
import { closeModals, loadModals } from 'src/app/store/actions/modal.actions';
import {filter, tap, takeUntil} from 'rxjs/operators';
import { selectModalOpenState } from 'src/app/store/selectors/modal.selectors';
import {Subject} from 'rxjs';
import {OnDestroy} from '@angular/core';

export const modalMixin = <T extends Constructor>(baseClass: T = class { } as T) =>
  class extends baseClass implements OnDestroy{
    destroyed$ = new Subject<void>();
    config: ModalOptions = {
      initialState: { id: 0 } as Partial<Record<string, unknown>>,
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
    };
    modalRef: BsModalRef;
    private modalServiceInjected: BsModalService;
    private storeInjected: Store<any>;
    constructor(...args: any[]) {
      super(...args);
      this.modalServiceInjected = args[0];
      this.storeInjected = args[1];
    }

    openModal({ id, component, params }: { id: number; component: any; params?:  any}) {
      this.storeInjected.dispatch(loadModals());
      this.config.initialState = { id, ...params };
      this.modalRef = this.modalServiceInjected.show(component, this.config);
      this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
      this.storeInjected.pipe(
        select(selectModalOpenState),
        filter(open => !open),
        tap(() => this.modalRef.hide()),
        takeUntil(this.destroyed$)
      ).subscribe();
    }

    closeModal() {
      this.storeInjected.dispatch(closeModals());
    }
    ngOnDestroy() {
      this.destroyed$.next();
    }
  };
