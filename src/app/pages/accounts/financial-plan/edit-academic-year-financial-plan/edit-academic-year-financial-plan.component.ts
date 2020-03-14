import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import {
  selectAcademicYearPlanState, selectAcademicYearPlanId
} from '../store/selectors/academic-year-plan.selectors';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { mergeMap, map, tap, takeWhile } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { FinancialPlanService } from '../../services/financial-plan.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { FinancialCostsService } from '../../services/financial-costs.service';

@Component({
  selector: 'app-edit-academic-year-financial-plan',
  templateUrl: './edit-academic-year-financial-plan.component.html',
  styleUrls: ['./edit-academic-year-financial-plan.component.css']
})
export class EditAcademicYearFinancialPlanComponent implements OnInit, OnDestroy {

  otherCostsValue: any[];
  isOpen = [false];
  isOpenTransport = [false];
  isOpenMeals = [false];
  isOpenTours = [false];
  isOpenBuildAndConst = [false];
  isOpenLibrary = [false];
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
  otherCosts$: Observable<any[]>;
  otherCosts: any[];
  constructor(
    private store: Store<AppState>,
    private classLevelService: ClassLevelService,
    private fb: FormBuilder,
    private financialPlanService: FinancialPlanService,
    private financialCostService: FinancialCostsService,
    private cdr: ChangeDetectorRef
  ) { }
  triggerChange() {
    this.otherFees.setValue(this.otherFees.value);
    this.otherFees.updateValueAndValidity();
  }
  ngOnInit() {
    this.componentIsActive = true;
    this.feePlanForm = this.fb.group({
      tuitionFee: this.fb.array([]),
      otherFees: this.fb.array([]),
    });
    this.academicYearPlan$ = this.store.pipe(select(selectAcademicYearPlanState));
    this.academicYearPlanId$ = this.store.pipe(select(selectAcademicYearPlanId));
    this.otherCosts$ = this.financialCostService.getAll();
    this.otherCosts$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => this.otherCosts = res);
    this.classLevels$ = this.academicYearPlanId$
      .pipe(
        mergeMap(academicYearId => {
          return forkJoin([
            this.classLevelService.getAll({ includeUnits: 1, includeLevels: 1, academicYearId }),
            this.financialPlanService.getForAcademicYear(academicYearId)
          ]);

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
          if (this.plans.otherFees.length > 0) {
            this.plans.otherFees.forEach(fee => {
              const financialCosts = this.fb.array([]);
              fee.financialCosts.forEach(cost => {
                const costItems = this.fb.array([]);
                cost.costItems.forEach(itemCostItem => {
                  const semesters = this.fb.array([]);
                  itemCostItem.semesters.forEach(sem => {
                    semesters.push(this.fb.group({
                      name: sem.name,
                      id: sem.id,
                      amount: sem.amount
                    }));
                  });
                  costItems.push(this.fb.group({
                    id: itemCostItem.id,
                    name: itemCostItem.name,
                    semesters
                  }));
                });
                financialCosts.push(this.fb.group({
                  name: cost.name,
                  id: cost.id,
                  costItems
                }));
              });
              this.otherFees.push(this.fb.group({
                classLevelId: fee.classLevelId,
                name: fee.name,
                financialCosts
              }));
            });
          }

        })
      );

  }

  get localCurrency() {
    // TODO-me make dynamic based on users location
    return 'KES ';
  }

  get tuitionFees(): FormArray {
    return this.feePlanForm.get('tuitionFee') as FormArray;
  }

  get otherFees(): FormArray {
    return this.feePlanForm.get('otherFees') as FormArray;
  }

  totalTuitionFee(i: number) {

    return this.tuitionFees.value[i].unitLevels
      .map(item => item.semesters).flat()
      .map(item => item.amount).flat()
      .reduce((a, b) => +a + +b, 0);


  }

  totalClassLevelCost(i: number, j?: number, k?: number) {

    if (typeof j === 'undefined') {
      return this.otherFees.controls[i].value.financialCosts
        .map(item => item.costItems).flat()
        .map(item => item.semesters).flat()
        .map(item => item.amount).flat()
        .reduce((a, b) => +a + +b, 0);
    } else if (typeof k === 'undefined') {
      return this.otherFees.controls[i].value.financialCosts[j]
        .costItems.flat()
        .map(item => item.semesters).flat()
        .map(item => item.amount).flat()
        .reduce((a, b) => +a + +b, 0);
    } else {
      return this.otherFees.controls[i].value.financialCosts[j]
        .costItems.flat()
        .map(item => item.semesters).flat()
        .map(item => {
          return (item.id === k ? item.amount : 0);

        }).flat()
        .reduce((a, b) => +a + +b, 0);
    }


  }
  get libraryFees(): FormArray {
    return this.feePlanForm.get('libraryFee') as FormArray;
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
        .pipe(takeWhile(() => this.componentIsActive))
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
