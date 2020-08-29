import {Constructor} from './constructor.mixin';
import {BehaviorSubject} from 'rxjs';
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export const formMixin = <T extends Constructor>(BaseClass: T = class {
} as T) =>
  class extends BaseClass {
    itemForm: FormGroup
    triggerValidationSubject$ = new BehaviorSubject<boolean>(false);
    triggerValidationAction$ = this.triggerValidationSubject$.asObservable();
    submitInProgressSubject$ = new BehaviorSubject<boolean>(false);
    submitInProgressAction$ = this.submitInProgressSubject$.asObservable();
    editFormSubject$ = new BehaviorSubject<boolean>(false);
    editFormAction$ = this.editFormSubject$.asObservable();
  };
