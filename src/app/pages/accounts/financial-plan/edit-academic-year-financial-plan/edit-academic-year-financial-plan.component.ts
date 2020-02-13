import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import {
  selectAcademicYearPlanState, selectAcademicYearPlanId
} from '../store/selectors/academic-year-plan.selectors';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { mergeMap, map, tap, takeWhile } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { FinancialPlanService } from '../../services/financial-plan.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-edit-academic-year-financial-plan',
  templateUrl: './edit-academic-year-financial-plan.component.html',
  styleUrls: ['./edit-academic-year-financial-plan.component.css']
})
export class EditAcademicYearFinancialPlanComponent implements OnInit, OnDestroy {
  isOpen = [false];
  academicYearPlan$: Observable<any>;
  classLevels$: Observable<any>;
  classLevels: any;
  academicYearPlanId$: Observable<number>;
  feePlanForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  markTabsWithError: boolean;
  componentIsActive: boolean;
  plans: any;
  constructor(
    private store: Store<AppState>,
    private classLevelService: ClassLevelService,
    private fb: FormBuilder,
    private financialPlanService: FinancialPlanService
  ) { }
  ngOnInit() {
    this.componentIsActive = true;
    this.feePlanForm = this.fb.group({
      tuitionFee: this.fb.array([])
    });
    this.academicYearPlan$ = this.store.pipe(select(selectAcademicYearPlanState));
    this.academicYearPlanId$ = this.store.pipe(select(selectAcademicYearPlanId));
    this.classLevels$ = this.academicYearPlanId$
      .pipe(
        mergeMap(academicYearId => {
          return forkJoin([
            this.classLevelService.getAll({ includeUnits: 1, includeLevels: 1, academicYearId }),
            this.financialPlanService.getForAcademicYear(academicYearId)
          ]);
          // return this.classLevelService.getAll({ includeUnits: 1, includeLevels: 1, academicYearId })
        })
      )
      .pipe(map(([item, item1]) => {
        this.plans = item1;
        return [...item.map(i => ({ ...i, unitLevels: i.unit_levels, unit_levels: undefined }))];
      }))
      .pipe(
        tap(item => {
          item.forEach(i => {
            const unitLevels = this.fb.array([]);
            (i.unitLevels as any[]).forEach(b => {
              const semesters = this.fb.array([]);
              b.semesters.forEach(c => {
                semesters.push(
                  this.fb.group({
                    id: c.id,
                    name: c.name,
                    amount: [0],
                  })
                );
              });
              unitLevels.push(
                this.fb.group({
                  id: b.id,
                  semesters
                  // name: i.name,
                })
              );
            });
            this.tuitionFees.push(
              this.fb.group({
                classLevelId: i.id,
                name: i.name,
                unitLevels
              })
            );
          });
          if (this.plans.tuitionFee.length > 0) {
            this.tuitionFees.setValue(this.plans.tuitionFee);
          }

        })
      );
  }

  get tuitionFees(): FormArray {
    return this.feePlanForm.get('tuitionFee') as FormArray;
  }
  validateForm() {
    this.triggerValidation = !this.triggerValidation;
  }
  submitfeePlanForm() {
    if (this.feePlanForm.valid) {
      this.isSubmitting = true;

      this.academicYearPlanId$
        .pipe(
          mergeMap(
            id => this.financialPlanService
              .submit({ academicYearId: id, data: this.feePlanForm.value }))
        )
        .subscribe(res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success'
          }));
        }, err => this.isSubmitting = false);
    }

  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
  get transportHasError(): boolean {
    return false;
  }
}
