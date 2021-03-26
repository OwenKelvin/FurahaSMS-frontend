import {Constructor} from './constructor.mixin';
import {BehaviorSubject, Subject} from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';

export const formMixin = <T extends Constructor>(baseClass: T = class {
} as T) =>
  class extends baseClass {
    itemForm: FormGroup;
    triggerValidationSubject$ = new BehaviorSubject<boolean>(false);
    triggerValidationAction$ = this.triggerValidationSubject$.asObservable();
    submitInProgressSubject$ = new BehaviorSubject<boolean>(false);
    submitInProgressAction$ = this.submitInProgressSubject$.asObservable();
    editFormSubject$ = new BehaviorSubject<boolean>(false);
    editFormAction$ = this.editFormSubject$.asObservable();
    submitSubject$ = new Subject();
    submitAction$ = this.submitSubject$.asObservable();

    clearFormArray(formArrayControl: FormArray) {
      while (formArrayControl.length) {
        formArrayControl.removeAt(0);
      }
    }
  };
