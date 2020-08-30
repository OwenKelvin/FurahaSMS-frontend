import {Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange} from '@angular/core';
import {LibraryBookClassesService} from '../../services/library-book-classes.service';
import {Observable, of} from 'rxjs';

import {DbService} from 'src/app/services/db.service';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {takeWhile} from 'rxjs/operators';


@Component({
  selector: 'app-select-library-class',
  templateUrl: './select-library-class.component.html',
  styleUrls: ['./select-library-class.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectLibraryClassComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectLibraryClassComponent),
      multi: true
    }
  ]
})
export class SelectLibraryClassComponent implements OnInit, OnChanges, ControlValueAccessor, OnDestroy {
  componentIsActive: boolean;

  constructor(
    private libraryBookClassesService: LibraryBookClassesService,
    private db: DbService
  ) {
  }

  libraryBookClassValue: any;
  @Input() classification: any;
  libraryBookClasses$: Observable<any>;

  onChanges: ($value: any) => void;
  onTouched: () => void;

  ngOnInit() {
    this.componentIsActive = true;

  }

  ngOnChanges(changes: { classification: SimpleChange; }) {
    let currentValue: any;
    if (changes) {
      currentValue = changes.classification.currentValue;
    }
    if (+currentValue > 0) {
      this.db.get(currentValue)
        .then((doc: any) => {
          this.libraryBookClasses$ = of(doc.items);
        }).catch(() => {
        this.libraryBookClasses$ = this.libraryBookClassesService
          .getClass({classification: currentValue, libraryClass: null});
        this.libraryBookClasses$
          .pipe(takeWhile(() => this.componentIsActive))
          .subscribe(items => {
            const doc = {
              _id: currentValue,
              items
            };
            if (items.length > 0) {

              this.db.put(doc).then(() => {
              }).catch(() => {
              });
            }
          });
      });

    }
  }

  validate(_control: FormControl) {
    // this.formControl = control;
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      // this.inputValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleChange($event: any) {
    this.onChanges($event);
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
