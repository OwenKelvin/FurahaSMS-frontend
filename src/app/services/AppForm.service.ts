import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class AppFormService {
  constructor() { }
  getErrorMessage(formControl: FormControl, label?: string): null | string {

    if (this.triggerValidation(formControl) && formControl.errors && formControl.errors.required) {
      return (label ? (label + ' ') : '') + 'field is required';
    }
    if (this.triggerValidation(formControl) && formControl.errors && formControl.errors.email) {
      return (label ? (label + ' ') : '') + 'field should be a valid email';
    }
    return null;
  }
  triggerValidation(formControl: FormControl) {
    const isDirty = formControl.dirty;
    const isTouched = formControl.touched;
    const isValid = formControl.valid;
    return (isDirty || isTouched) && !isValid;
  }
}
