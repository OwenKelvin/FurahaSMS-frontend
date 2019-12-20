import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { InputComponent } from '../input/input.component';
import { AllowedPhoneNumbersService } from 'src/app/services/allowed-phone-numbers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.css'],
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
export class TelInputComponent extends InputComponent implements OnInit, OnChanges, ControlValueAccessor {
  countries$: Observable<any>;
  selectedPhoneCode: number | string;
  selectedPhone: { country: any, code: any };
  allowedPhoneCountries: any;
  constructor(appFormService: AppFormService, private allowedPhoneNumbers: AllowedPhoneNumbersService) {
    super(appFormService);
   }

  ngOnInit() {
    this.selectedPhone = { code: 254, country: 'KE' };
    this.allowedPhoneNumbers.getAllowedCountries().subscribe(data => {
      this.allowedPhoneCountries = data;
    });
    this.countries$ = this.allowedPhoneNumbers.getAllCountryCodes();
  }
  validatePhone(phone): void {
    if (!this.allowedPhoneNumbers.isValidPhoneNumber(phone)) {
      this.formControl.markAsDirty();
      this.fieldError = 'The Phone Number Entered is Invalid';
      this.formControl.setErrors({ invalid: 'Phone Number is invalid' });
    }
  }

}
