import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { InputComponent } from '../input/input.component';

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
  
  constructor(appFormService: AppFormService) {
    super(appFormService);
   }

  ngOnInit() {
  }

}
