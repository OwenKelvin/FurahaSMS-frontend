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
  fieldError: string;
  disabled: boolean;
  onChanges: ($value) => void;
  onTouched: () => void;
  inputValue: any;
  constructor(private appFormService: AppFormService) {}

  ngOnInit() {
    this.formControl = new FormControl();
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
  get fieldClassIsValid() {
    if (this.fieldError) {
      return `is-invalid`;
    }
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
