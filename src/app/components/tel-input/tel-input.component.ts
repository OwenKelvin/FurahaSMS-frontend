import {AfterViewInit, Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';
import {AppFormService} from 'src/app/services/AppForm.service';
import {PhoneNumbersService} from 'src/app/services/phone-numbers.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TelInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TelInputComponent),
      multi: true
    }
  ]
})
export class TelInputComponent extends InputComponent implements OnInit, Validator, AfterViewInit, OnDestroy {
  countries$: Observable<any>;
  selectedPhoneCode: number | string;
  selectedPhone: { country: any; code: any };
  allowedPhoneCountries: any;
  phoneNumberGroup = this.fb.group({
    code: [''],
    phoneNumber: ['']
  });
  destroyed$ = new Subject();

  constructor(
    appFormService: AppFormService,
    private phoneNumbers: PhoneNumbersService,
    private fb: FormBuilder
  ) {
    super(appFormService);
  }

  ngOnInit() {
    this.phoneNumbers.getAllowedCountries()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(data => {
        this.allowedPhoneCountries = data;
      });
    this.countries$ = this.phoneNumbers.getAllCountryCodes();

    this.countryCode.setValue(this.localeCountryCode);

    this.phoneNumberGroup.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => {
        if (this.onChanges) {
          this.onChanges('+' + value.code + (value.phoneNumber ? value.phoneNumber : ''));
        }
      });
  }

  ngAfterViewInit() {
    const queryString = '#' + this.id + '-container .ng-input [role=combobox]';
    const element = document.querySelector(queryString);
    if (element) {
      element.setAttribute('aria-label', 'Select country code');
    }
  }

  get localeCountryCode() {
    // TODO-me set country code as per user locale
    return 254;
  }

  validatePhone(phone: string | null | undefined): void {
    if (!this.phoneNumbers.isValidPhoneNumber(phone)) {
      this.formControl.markAsDirty();
      this.fieldError = 'The Phone Number Entered is Invalid';
      this.formControl.setErrors({invalid: 'Phone Number is invalid'});
    }
  }

  get countryCode(): FormControl {
    return this.phoneNumberGroup.get('code') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.phoneNumberGroup.get('phoneNumber') as FormControl;
  }

  writeValue(value: any): void {
    if (value !== undefined && value !== '') {
      const {code, phone} = this.phoneNumbers.splitNumberFromCountryCode(value);
      this.countryCode.setValue(code);
      this.phoneNumber.setValue(phone);
    } else {
      console.log({countryCode: this.countryCode});
      this.countryCode.setValue(this.localeCountryCode);
    }
  }

  validateField() {
    super.validateField();
    const value = this.phoneNumberGroup.value;
    this.validatePhone(this.phoneNumberString);
  }

  validate(c: FormControl) {
    if (!c.hasError('required') && c.value !== '') {
      return null;
    }
    super.validate(c);
    if (c.hasError('required')) {
      return {
        required: {
          valid: false,
        }
      };
    }

    return (this.phoneNumbers.isValidPhoneNumber(this.phoneNumberString)) ? null : {
      format: {
        valid: false,
      },
    };
  }

  get phoneNumberString(): string {
    const value = this.phoneNumberGroup.value;
    return '+' + value.code + value.phoneNumber;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
