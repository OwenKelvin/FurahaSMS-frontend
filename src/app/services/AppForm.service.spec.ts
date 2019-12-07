import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppFormService } from './AppForm.service';

describe('AppForm class', () => {
  const fb: FormBuilder = new FormBuilder();
  let formField: FormGroup;
  beforeEach(() => {
    formField = fb.group({
      formItem: ['', [Validators.required]]
    });
  });
  const appForm = new AppFormService();
  describe('Trigger validation function', () => {
    it('should return true if form is dirty', () => {
      const formItem = formField.get('formItem') as FormControl;
      formItem.markAsDirty();
      expect(appForm.triggerValidation(formField.get('formItem') as FormControl)).toBeTruthy();
    });
    it('should return false if form is valid and is touched', () => {
      const formItem = formField.get('formItem') as FormControl;
      formItem.patchValue('Form is now valid');
      formItem.markAsTouched();
      expect(appForm.triggerValidation(formItem)).toBeFalsy();
    });
    it('should return false if form is valid and is dirty', () => {
      const formItem = formField.get('formItem') as FormControl;
      formItem.patchValue('Form is now valid');
      formItem.markAsDirty();
      expect(appForm.triggerValidation(formItem)).toBeFalsy();
    });
  });
  describe('getErrorMessage function', () => {
    let formItem: FormControl;
    beforeEach(() => {
      formItem = formField.get('formItem') as FormControl;
      formItem.setValidators([]);
      formItem.updateValueAndValidity();
    });
    it('should return null if no error in field', () => {
      expect(appForm.getErrorMessage(formItem)).toBeNull();
    });
    it('should contain string "required" if field is required', () => {
      formItem.setValidators([Validators.required]);
      formItem.updateValueAndValidity();
      formItem.markAsDirty();
      expect(appForm.getErrorMessage(formItem)).toContain('required');
    });
    it('should contain string "Username" if field is required and Username is passed as label', () => {
      formItem.setValidators([Validators.required]);
      formItem.updateValueAndValidity();
      formItem.markAsDirty();
      expect(appForm.getErrorMessage(formItem, 'Username')).toContain('Username');
    });
    it('should contain string "email" if field is email', () => {
      formItem.setValidators([Validators.email]);
      formItem.updateValueAndValidity();
      formItem.patchValue('None email');
      formItem.markAsDirty();
      expect(appForm.getErrorMessage(formItem)).toContain('email');
    });
    it('should contain string "Username" if username is provided to email field', () => {
      formItem.setValidators([Validators.email]);
      formItem.updateValueAndValidity();
      formItem.patchValue('None email');
      formItem.markAsDirty();
      expect(appForm.getErrorMessage(formItem, 'Username')).toContain('Username');
    });
  });
});
