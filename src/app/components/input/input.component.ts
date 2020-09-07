import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
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
  @Input() formControl: FormControl = new FormControl();
  @Input() triggerValidation: boolean;
  @Input() autofocus: boolean;
  @Input() autocomplete: string;
  @Input() type: string;
  @Input() labelClass: string;
  @Input() inputClass: string;
  @Input() step: number;
  @Input() min: number;
  @Input() showPasswordStrength = false;
  fieldError: string | null;
  fieldType = 'text';
  disabled: boolean;
  onChanges: ($value: any) => void;
  onTouched: () => void;
  inputValue: any;
  passwordStringChangeSubject$: Subject<string> = new BehaviorSubject('');
  passwordStringChangeAction$: Observable<string> = this.passwordStringChangeSubject$.asObservable();
  constructor(private appFormService: AppFormService) { }

  ngOnInit() {
    if (['tel', 'phone', 'password', 'number', 'date', 'datetime-local', 'time'].includes(this.type)) {
      this.fieldType = this.type;
    }
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
    if (this.showPasswordStrength) {
      this.passwordStringChangeSubject$.next(this.formControl.value);
    }
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
