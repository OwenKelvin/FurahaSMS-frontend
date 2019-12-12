import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppFormService {
  constructor() { }
  getErrorMessage(formControl: FormControl, label?: string): null | string {

    if (this.triggerValidation(formControl) && formControl.errors && formControl.errors.required) {
      return (label ? (label + ' ') : '') + 'field is required';
    }
    if (this.triggerValidation(formControl) && formControl.errors && formControl.errors.email) {
      return (label ? (label + ' ') : '') + 'field should be a valid email';
    }
    if (this.triggerValidation(formControl) && formControl.errors && formControl.errors.minlength) {
      return (label ? (label + ' ') : '') + `field too short (min ${formControl.errors.minlength.requiredLength})`;
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
