import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { map, flatMap, takeWhile, mergeMap } from 'rxjs/operators';
import { UnitLevelService } from 'src/app/services/unit-level.service';
import { ViewEncapsulation } from '@angular/core';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { AcademicYearService } from '../../services/academic-year.service';
import { ActivatedRoute, Router } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-academic-year-subject-units',
  templateUrl: './academic-year-subject-units.component.html',
  styleUrls: ['./academic-year-subject-units.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AcademicYearSubjectUnitsComponent implements OnInit, OnDestroy {
  classLevels$: Observable<any[]>;
  unitLevels: any[] = [];
  selectedUnitLevel = [[]];
  allocationsForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;
  academicYearId$: Observable<number>;
  componentIsActive: boolean;
  constructor(
    private store: Store<fromStore.AppState>,
    private unitLevelService: UnitLevelService,
    private classLevelService: ClassLevelService,
    private fb: FormBuilder,
    private academicYearService: AcademicYearService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.academicYearId$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(takeWhile(() => this.componentIsActive));
    this.isSubmitting = false;
    this.allocationsForm = this.fb.group({
      classLevels: this.fb.array([])
    });

    this.classLevels$ =
      this.academicYearId$.pipe(
        mergeMap(academicYearId => this.classLevelService.getAll({ includeUnits: 1, includeLevels: 1, academicYearId }))
      )
      .pipe(takeWhile(() => this.componentIsActive));
    this.classLevels$.subscribe(res => {
      res.forEach(item => {
        this.classLevels.push(
          this.fb.group({
            id: item.id,
            // Problem is Here
            unitLevels: [item.unit_levels.map(({id} : {id: number}) => id)],
            name: [item.name]
          })
        );
      });
    });
    this.unitLevelService.getAll()
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe((res) => {
        this.unitLevels = res;
      });
  }

  get classLevels(): FormArray {
    return this.allocationsForm.get('classLevels') as FormArray;
  }
  submitunitAllocationForm() {
    this.isSubmitting = true;
    this.academicYearId$
      .pipe(
        flatMap(id => this.academicYearService.saveUnitLevels(id, this.classLevels.value))
    )
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.isSubmitting = false;
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: res.message,
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));
      }, () => this.isSubmitting = false);
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
