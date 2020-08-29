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

interface AllValidationErrors {
  controlName: string;
  errorName: string;
  errorValue: any;
}

interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function getFormValidationErrors(controls: FormGroupControls): AllValidationErrors[] {
  let errors: AllValidationErrors[] = [];
  Object.keys(controls).forEach(key => {
    const control = controls[key];
    if (control instanceof FormGroup) {
      errors = errors.concat(getFormValidationErrors(control.controls));
    }
    const controlErrors: ValidationErrors = controls[key].errors as ValidationErrors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          controlName: key,
          errorName: keyError,
          errorValue: controlErrors[keyError]
        });
      });
    }
  });
  return errors;
}
