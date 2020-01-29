import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { AcademicYearService } from '../../academics/services/academic-year.service';
import { Observable, combineLatest, of } from 'rxjs';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { mergeMap, tap, map, takeWhile } from 'rxjs/operators';
import { StudentAcademicsService } from '../services/student-academics.service';
import { AcademicYearUnitService } from '../../academics/services/academic-year-unit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-create-student-academics',
  templateUrl: './create-student-academics.component.html',
  styleUrls: ['./create-student-academics.component.css']
})
export class CreateStudentAcademicsComponent implements OnInit, OnDestroy {
  academicYears$: Observable<any>;
  classLevels$: Observable<any>;
  academicCategory: FormGroup;
  unitLevels$: Observable<any>;
  academicYearUnitLevels: any;
  units_loaded: boolean;
  triggerValidation: boolean;
  isSubmitting: boolean;
  componentIsActive: boolean;

  constructor(
    private classLevelService: ClassLevelService,
    private academicYearService: AcademicYearService,
    private studentAcademicsService: StudentAcademicsService,
    private academicYearUnitService: AcademicYearUnitService,
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.academicYears$ = this.academicYearService.getAll();
    this.classLevels$ = this.classLevelService.getAll();
    this.academicCategory = this.fb.group({
      academicYear: [''],
      classLevel: [''],
      unitLevels: this.fb.array([])
    });
    this.unitLevels$ = combineLatest(this.academicCategory.get('academicYear').valueChanges, this.academicCategory.get('classLevel').valueChanges)
      .pipe(tap(_ => {
        this.units_loaded = false;
      }))
      .pipe(mergeMap(item => {
        if (item[0] === '' || item[1] === '') {
          return of([]);
        }
        return this.academicYearUnitService.getUnitsFor({ academicYear: item[0], classLevel: item[1] });
      }));
    this.unitLevels$.subscribe(res => {
      this.unitLevels.setValue([]);
      res.map(({ id }) => id).forEach(val => {
        this.unitLevels.push(new FormControl(val));
      });
      this.academicYearUnitLevels = res;
      this.units_loaded = true;
      if (res.length === 0) {
        this.units_loaded = undefined;
      }
    });
  }

  get unitLevels(): FormArray {
    return this.academicCategory.get('unitLevels') as FormArray;
  }

  onCheckboxChange(e) {

    if (e.target.checked) {
      this.unitLevels.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      this.unitLevels.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          this.unitLevels.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitAllocationForm() {
    let studentIdParam;
    this.isSubmitting = true;
    const data = this.unitLevels.value;
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(map(params => params.get('id')))
      .pipe(mergeMap(studentId => {
        studentIdParam = studentId;
        return this.studentAcademicsService.saveSubjectAllocation({ studentId, data });
      }))
      .subscribe(
        res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastHeader: 'Success',
            toastTime: 'Just Now',
            toastBody: res.message
          }));
          this.router.navigate(['students', studentIdParam, 'academics'])
        },
        err => this.isSubmitting = false);
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
