import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor, OnChanges {
  constructor() { }
  @Input() label: string;
  @Input() readonly: boolean;
  inputValue: any;
  onChanges: (val: any) => void;
  onTouched: any;
  ngOnInit() {

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



  ngOnChanges(changes: SimpleChanges) {
    const inputValue: SimpleChange = changes.inputValue;

  }
  propagateValue(event: boolean) {
    this.onChanges(event);
  }
}
