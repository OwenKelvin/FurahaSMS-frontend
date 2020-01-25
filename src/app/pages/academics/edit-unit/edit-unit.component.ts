import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { UnitsService } from 'src/app/services/units.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { takeWhile, map } from 'rxjs/operators';
import { VIEW_UNIT_CURRICULUM } from 'src/app/helpers/links.helpers';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit, OnDestroy {
  unit$: Observable<any>;
  unit: any;
  unitForm: FormGroup;
  newForm: boolean;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  isComponentActive: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  markTabsWithError: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private unitService: UnitsService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.isComponentActive = true;
    this.newForm = false;
    this.unitForm = this.fb.group({
      id: [null, []],
      name: ['', [Validators.required]],
      abbr: ['', [Validators.required]],
      description: [''],
      active: [true],
      unitCategory: [null, Validators.required],
      unitLevels: this.fb.array([])
    });
    this.unitForm.valueChanges.subscribe(item => {
      this.valueChange.emit(this.unitForm);
    });

    this.route.paramMap.subscribe(params => {
      this.unit$ = this.unitService.getUnitWithId(+params.get('id'));
      this.unit$
        .pipe(takeWhile(() => this.isComponentActive))
        .pipe(map(({ id, active, name, abbreviation: abbr, essence_statement: description,
          unit_category_id: unitCategory, unit_levels: unitLevels }) => ({
            id, active, name, abbr, description, unitCategory,
            unitLevels: unitLevels ? unitLevels.map(({ id, name, level }) => ({ id, name, level })) : []
          })))
        .subscribe(unit => {
          this.unit = unit;
          if (unit.unitLevels.length === 0) {
            this.addUnitLevelFromValue(false);
          }
          else {
            [].forEach.call(unit.unitLevels, () => this.addUnitLevelFromValue(false));
          }
          this.unitForm.setValue(unit);

        });
    });
  }
  get unitLevels(): FormArray {
    return this.unitForm.get('unitLevels') as FormArray;
  }
  addUnitLevel() {
    this.addUnitLevelFromValue(false);
    this.unitLevels.updateValueAndValidity();
  }
  removeUnitLevel(i) {
    const confirmDeletion = confirm('Are you sure you wish to delete item?');
    if (confirmDeletion) {
      this.unitLevels.controls.splice(i, 1);
      this.unitLevels.updateValueAndValidity();
    }
  }
  addUnitLevelFromValue(value) {
    if (!value) {
      this.unitLevels.push(this.fb.group({
        id: [],
        name: ['', [Validators.required]],
        level: [null, [Validators.pattern('^[0-9]+$'), Validators.required]]
      }));
    }
  }
  validateForm() {
    this.triggerValidation = !this.triggerValidation;
    this.markTabsWithError = true;
  }
  get unitLevelsHasError(): boolean {
    return this.unitLevels.invalid;
  }
  get generalInfoHasError(): boolean {
    return !['name', 'abbr', 'unitCategory']
      .every(item => this.unitForm.get(item).valid);
  }
  submitUnitForm() {
    this.isSubmitting = true;
    this.unitService.submit(this.unitForm.value).subscribe(success => {
      this.router.navigate([VIEW_UNIT_CURRICULUM(success.id)]);
      this.isSubmitting = false;
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true,
        toastBody: 'Successfully created unit',
        toastHeader: 'Success!',
        toastTime: 'Just now'
      }));
    }, error => {

      this.store.dispatch(loadErrorMessagesSuccess({
        body: error.help,
        show: true,
        title: error.message,
        status: error.status
      }));
      this.isSubmitting = false;
    });
  }
  ngOnDestroy() {
    this.isComponentActive = false;
  }

}
