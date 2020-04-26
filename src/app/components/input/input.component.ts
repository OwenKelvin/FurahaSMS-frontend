import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() prependIcon: string;
  @Input() formControl: FormControl;
  @Input() triggerValidation: boolean;
  @Input() autofocus: false;
  @Input() autocomplete: string;
  @Input() type: string;
  @Input() labelClass: string;
  @Input() inputClass: string;
  @Input() step: number;
  @Input() min: number;
  fieldError: string | null;
  fieldType: string;
  disabled: boolean;
  onChanges: ($value: any) => void;
  onTouched: () => void;
  inputValue: any;
  constructor(private appFormService: AppFormService) { }

  ngOnInit() {
    this.fieldType = 'text';
    if (['tel', 'phone', 'password', 'number', 'date', 'datetime-local'].includes(this.type)) {
      this.fieldType = this.type;
    }
    this.formControl = new FormControl();
  }
  get isRequired(): boolean {
    if (this.formControl.validator) {
      const validationResult = this.formControl.validator(this.formControl);
      return (validationResult !== null && validationResult.required === true);
    }
    return false;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (!this.disabled) {
      if (!isDisabled) {
        this.formControl.enable();
        this.formControl.updateValueAndValidity();
      } else {
        this.disabled = true;
      }
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    const triggerValidation: SimpleChange = changes.triggerValidation;
    if (triggerValidation && !triggerValidation.firstChange) {
      this.formControl.markAsTouched();
      this.validateField();
    }
  }
  validate(control: FormControl) {
    this.formControl = control;
  }
  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  get fieldClassIsValid(): string | null {
    if (this.fieldError) {
      return 'is-invalid';
    }
    return null;
  }
  get fieldClass() {
    const formControlClass = 'form-control';
    if (this.fieldError) {
      return `${formControlClass} is-invalid`;
    }
    return formControlClass;
  }
  validateField() {
    this.fieldError = this.appFormService.getErrorMessage(this.formControl, this.label);
    this.onTouched();
  }
  updateFieldValidation() {
    if (this.fieldError) {
      this.validateField();
    }
  }
}
