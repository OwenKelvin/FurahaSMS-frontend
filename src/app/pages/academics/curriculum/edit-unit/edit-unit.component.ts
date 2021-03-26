import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UnitsService} from 'src/app/services/units.service';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {VIEW_UNIT_CURRICULUM} from 'src/app/helpers/links.helpers';
import {SemesterService} from '../semester/services/semester.service';
import {formWithEditorMixin} from 'src/app/shared/mixins/form-with-editor.mixin';
import {subscribedContainerMixin} from 'src/app/shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})

export class EditUnitComponent extends subscribedContainerMixin(formWithEditorMixin()) implements OnInit {
  @Input() idIndex: number;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  generalInfoHasErrorSubject$ = new BehaviorSubject<boolean>(false);
  generalInfoHasErrorAction$ = this.generalInfoHasErrorSubject$.asObservable();
  unitLevelsHasErrorSubject$ = new BehaviorSubject<boolean>(false);
  unitLevelsHasErrorAction$ = this.unitLevelsHasErrorSubject$.asObservable();
  markTabsWithErrorSubject$ = new BehaviorSubject<boolean>(false);
  markTabsWithErrorAction$ = this.markTabsWithErrorSubject$.asObservable();

  semesters$ = this.semesterService.active$;
  unit$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    filter(id => id > 0),
    tap(() => this.editFormSubject$.next(true)),
    mergeMap(id => this.unitService.getUnitWithId(id)),
    map(({
           id, active, name, abbreviation: abbr, description,
           unit_category_id: unitCategory, unit_levels: unitLevels
         }) => ({
      id, active, name, abbr, description, unitCategory,
      unitLevels: (unitLevels ? unitLevels.map(({id: id1, name: name1, level, semesters}: any) => ({
        id: id1,
        name: name1,
        level,
        semesters: semesters ? semesters.map(({id: id2}: any) => id2) : []
      })) : [])
    })),
    tap(unit => {
      if (unit.unitLevels.length === 0) {
        this.unitForm.setValue(unit);
        this.addUnitLevelFromValue(false);
      } else {
        [].forEach.call(unit.unitLevels, () => this.addUnitLevelFromValue(false));
        this.unitForm.setValue(unit);
      }

    })
  );

  unitForm: FormGroup = this.fb.group({
    id: [null, []],
    name: ['', [Validators.required]],
    abbr: ['', [Validators.required]],
    description: [''],
    active: [true],
    unitCategory: [null, Validators.required],
    unitLevels: this.fb.array([])
  });

  v$ = combineLatest([this.semesters$, this.unit$]).pipe(
    map(([semesters, unit]) => ({semesters, unit}))
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private unitService: UnitsService,
    private semesterService: SemesterService) {
    super();
  }

  ngOnInit() {
    this.tinyMCEConfig.height = 210;
    this.unitForm.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.valueChange.emit(this.unitForm);
        const generalHasError = !['name', 'abbr', 'unitCategory']
          .every(item => (this.unitForm.get(item) as FormControl).valid);
        this.generalInfoHasErrorSubject$.next(generalHasError);
        this.unitLevelsHasErrorSubject$.next(this.unitLevels.invalid);
      });
  }

  get unitLevels(): FormArray {
    return this.unitForm.get('unitLevels') as FormArray;
  }

  addUnitLevel() {
    this.addUnitLevelFromValue(false);
    this.unitLevels.updateValueAndValidity();
  }

  removeUnitLevel(i: number) {
    const confirmDeletion = confirm('Are you sure you wish to delete item?');
    if (confirmDeletion) {
      this.unitLevels.controls.splice(i, 1);
      this.unitLevels.updateValueAndValidity();
    }
  }

  addUnitLevelFromValue(value: any) {
    if (!value) {
      this.unitLevels.push(this.fb.group({
        id: [],
        name: ['', [Validators.required]],
        level: [null, [Validators.pattern('^[0-9]+$'), Validators.required]],
        semesters: [[], Validators.required]
      }));
    }
  }

  submitUnitForm() {
    this.submitInProgressSubject$.next(true);
    this.unitService.submit(this.unitForm.value)
      .subscribe({
        next: success => {
          this.router.navigate([VIEW_UNIT_CURRICULUM(success.id)]);
          this.submitInProgressSubject$.next(false);

        }, error: () => this.submitInProgressSubject$.next(false)
      });
  }

}

// export class EditUnitComponent implements OnInit, OnDestroy {
//   unit$: Observable<any>;
//   unit: any;
//   unitForm: FormGroup;
//   newForm: boolean;
//   @Input() idIndex: number;
//   @Output() valueChange: EventEmitter<any> = new EventEmitter();
//   componentIsActive: boolean = true;
//   isSubmitting: boolean;
//   triggerValidation: boolean;
//   markTabsWithError: boolean;
//   semesters$: Observable<{ id: number; name: string; }[]>;
//   semesters: { id: number; name: string; }[];
//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     private unitService: UnitsService,
//     private semesterService: SemesterService) { }

//   ngOnInit() {

//     this.newForm = false;
//     this.unitForm = this.fb.group({
//       id: [null, []],
//       name: ['', [Validators.required]],
//       abbr: ['', [Validators.required]],
//       description: [''],
//       active: [true],
//       unitCategory: [null, Validators.required],
//       unitLevels: this.fb.array([])
//     });
//     this.unitForm.valueChanges
//       .pipe(takeWhile(() => this.componentIsActive))
//       .subscribe(() => {
//         this.valueChange.emit(this.unitForm);
//       });
//     this.semesters$ = this.semesterService.all$;
//     this.semesters$?.pipe(takeWhile(() => this.componentIsActive))
//       .subscribe(items => {
//         this.semesters = items;
//       });
//     this.route.paramMap
//       .pipe(takeWhile(() => this.componentIsActive))
//       .subscribe(params => {
//       this.unit$ = this.unitService.getUnitWithId(Number(params.get('id')));
//       this.unit$

//         .pipe(map(({ id, active, name, abbreviation: abbr, description,
//           unit_category_id: unitCategory, unit_levels: unitLevels }) => ({
//             id, active, name, abbr, description, unitCategory,
//             unitLevels: (unitLevels ? unitLevels.map(({ id: id1, name: name1, level, semesters }: any) => ({
//               id: id1,
//               name: name1,
//               level,
//               semesters: semesters ? semesters.map(({ id: id2 }: any) => id2) : []
//             })) : [])
//           })))
//         .pipe(takeWhile(() => this.componentIsActive))
//         .subscribe(unit => {
//           this.unit = unit;
//           if (unit.unitLevels.length === 0) {
//             this.addUnitLevelFromValue(false);
//           } else {
//             [].forEach.call(unit.unitLevels, () => this.addUnitLevelFromValue(false));
//           }
//           this.unitForm.setValue(unit);
//         });
//     });
//   }
//   get unitLevels(): FormArray {
//     return this.unitForm.get('unitLevels') as FormArray;
//   }
//   addUnitLevel() {
//     this.addUnitLevelFromValue(false);
//     this.unitLevels.updateValueAndValidity();
//   }
//   removeUnitLevel(i: number) {
//     const confirmDeletion = confirm('Are you sure you wish to delete item?');
//     if (confirmDeletion) {
//       this.unitLevels.controls.splice(i, 1);
//       this.unitLevels.updateValueAndValidity();
//     }
//   }
//   addUnitLevelFromValue(value: any) {
//     if (!value) {
//       this.unitLevels.push(this.fb.group({
//         id: [],
//         name: ['', [Validators.required]],
//         level: [null, [Validators.pattern('^[0-9]+$'), Validators.required]],
//         semesters: [[], Validators.required]
//       }));
//     }
//   }
//   validateForm() {
//     this.triggerValidation = !this.triggerValidation;
//     this.markTabsWithError = true;
//   }
//   get unitLevelsHasError(): boolean {
//     return this.unitLevels.invalid;
//   }
//   get generalInfoHasError(): boolean {
//     return !['name', 'abbr', 'unitCategory']
//       .every(item => (this.unitForm.get(item) as FormControl).valid);
//   }
//   submitUnitForm() {
//     this.isSubmitting = true;
//     this.unitService.submit(this.unitForm.value)
//       .pipe(takeWhile(() => this.componentIsActive))
//       .subscribe(success => {
//       this.router.navigate([VIEW_UNIT_CURRICULUM(success.id)]);
//       this.isSubmitting = false;

//     }, () => {

//       this.isSubmitting = false;
//     });
//   }
//   ngOnDestroy() {
//     this.componentIsActive = false;
//   }

// }
