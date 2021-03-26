import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TelInputComponent} from './tel-input.component';
import {FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {forwardRef} from '@angular/core';
import {ReactiveComponentModule} from '@ngrx/component';

describe('TelInputComponent', () => {
  let component: TelInputComponent;
  let fixture: ComponentFixture<TelInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [TelInputComponent],
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
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelInputComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
