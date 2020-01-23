import { Component, OnInit, Input, SimpleChange, OnChanges, forwardRef } from '@angular/core';
import { LibraryBookClassesService } from '../../services/library-book-classes.service';
import { Observable, of } from 'rxjs';

import { DbService } from 'src/app/services/db.service';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';


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
export class SelectLibraryClassComponent implements OnInit, OnChanges, ControlValueAccessor {
  libraryBookClassValue: any;
  @Input() classification;
  libraryBookClasses$: Observable<any>;
  constructor(
    private libraryBookClassesService: LibraryBookClassesService,
    private db: DbService
  ) { }

  ngOnInit() {

  }
  ngOnChanges(changes: { classification: SimpleChange }) {
    console.log(changes)
    let currentValue;
    if (changes) {
      currentValue = changes.classification.currentValue;
    }
    if (+currentValue > 0) {
      this.db.get(currentValue)
        .then(doc => {
          this.libraryBookClasses$ = of(doc.items);
        }).catch(e => {
          this.libraryBookClasses$ = this.libraryBookClassesService
            .getClass({ classification: currentValue, libraryClass: null });
          this.libraryBookClasses$.subscribe(items => {
            var doc = {
              "_id": currentValue,
              "items": items
            };
            if (items.length > 0) {
            
              this.db.put(doc).then(() => { }).catch(e => console.log("Data Retrieved from Cache"));
            }
          });
        });

    }
  }
  validate(control: FormControl) {
    // this.formControl = control;
  }
  
  onChanges: ($value) => void;
  onTouched: () => void;
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
  
  handleChange($event) {
    this.onChanges($event);
  }
}
