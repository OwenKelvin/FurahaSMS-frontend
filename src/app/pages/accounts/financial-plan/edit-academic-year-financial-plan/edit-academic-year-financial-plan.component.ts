import {Component, ViewChild} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {selectPlanForAcademicYearWithId} from '../store/selectors/academic-year-plan.selectors';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {TabsetComponent} from 'ngx-bootstrap/tabs/public_api';
import {FinancialPlanService} from '../../services/financial-plan.service';
import {FinancialCostsService} from '../../services/financial-costs.service';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {loadAcademicYearPlans} from '../store/actions/academic-year-plan.actions';

@Component({
  selector: 'app-edit-academic-year-financial-plan',
  templateUrl: './edit-academic-year-financial-plan.component.html',
  styleUrls: ['./edit-academic-year-financial-plan.component.css']
})
export class EditAcademicYearFinancialPlanComponent extends subscribedContainerMixin(formMixin()) {
  @ViewChild('staticTabs', {static: false}) staticTabs: TabsetComponent;
  isOpen = [false];
  isOpenTransport = [false];
  academicYearPlanId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  academicYearPlan$ = this.academicYearPlanId$.pipe(
    mergeMap(id => this.store.pipe(select(selectPlanForAcademicYearWithId(id)))),
  );
  feePlanForm: FormGroup = this.fb.group({
    tuitionFee: this.fb.array([]),
    otherFees: this.fb.array([]),
  });

  markTabsWithError: boolean;
  plans: any;
  otherCosts$: Observable<any[]> = this.financialCostService.all$;
  allClassLevels$ = this.academicYearPlanId$.pipe(
    mergeMap((academicYearId) => this.classLevelService.getAll({includeUnits: 1, includeLevels: 1, academicYearId}),)
  );
  classLevels$ = combineLatest([this.allClassLevels$, this.academicYearPlan$]).pipe(
    map(([allClassLevels, {financialYearPlan}]) => ([allClassLevels, financialYearPlan])),
    map(([classLevel, financialPlan]) => {
      const activeClassLevels: any[] = classLevel
        .map(({id}: { id: number }) => id);
      this.plans = financialPlan;
      return [
        ...(classLevel.filter(({id: classLevelId}: { id: number }) => activeClassLevels.includes(classLevelId)))
          .map(i => ({...i, unitLevels: i.unit_levels}))
      ];
    }),
    tap(this.setFees.bind(this))
  );
  v$ = combineLatest([this.otherCosts$, this.academicYearPlan$, this.classLevels$]).pipe(
    map(([otherCosts, academicYearPlan, classLevels]) =>
      ({otherCosts, academicYearPlan, classLevels}))
  );
  constructor(
    private store: Store<AppState>,
    private classLevelService: ClassLevelService,
    private fb: FormBuilder,
    private financialPlanService: FinancialPlanService,
    private financialCostService: FinancialCostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
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

  get libraryFees(): FormArray {
    return this.feePlanForm.get('libraryFee') as FormArray;
  }

  get otherCostsHasError(): boolean {
    return false;
  }

  setFees(item: any[]) {
    while (this.tuitionFees?.length) {
      this.tuitionFees.removeAt(0);
    }
    item.forEach((i: any) => {
      const unitLevels = this.fb.array([]);
      (i.unitLevels as any[]).forEach(b => {
        const semesters = this.fb.array([]);
        b.semesters.forEach((c: any) => {
          semesters.push(this.fb.group({id: c.id, name: c.name, amount: [0]}));
        });
        unitLevels.push(this.fb.group({id: b.id, semesters}));
      });
      this.tuitionFees.push(this.fb.group({classLevelId: i.id, name: i.name, unitLevels})
      );
    });
    if (this.plans.tuitionFee?.length > 0) {
      console.log('=>>', this.plans.tuitionFee);
      this.tuitionFees.patchValue(this.plans.tuitionFee);
    }
    if (this.plans.otherFees?.length > 0) {
      this.plans.otherFees.forEach((fee: any) => {
        const financialCosts = this.fb.array([]);
        fee.financialCosts.forEach((cost: any) => {
          const costItems = this.fb.array([]);
          cost.costItems.forEach((itemCostItem: any) => {
            const semesters = this.fb.array([]);
            itemCostItem.semesters.forEach((sem: any) => {
              semesters.push(this.fb.group({name: sem.name, id: sem.id, amount: sem.amount}));
            });
            costItems.push(this.fb.group({id: itemCostItem.id, name: itemCostItem.name, semesters}));
          });
          financialCosts.push(this.fb.group({name: cost.name, id: cost.id, costItems}));
        });
        this.otherFees.push(this.fb.group({classLevelId: fee.classLevelId, name: fee.name, financialCosts}));
      });
    }

  };

  triggerChange() {
    this.otherFees.setValue(this.otherFees.value);
    this.otherFees.updateValueAndValidity();
  }

  totalTuitionFee(i: number) {

    return this.tuitionFees.value[i].unitLevels
      .map((item: any) => item.semesters).flat()
      .map((item: any) => item.amount).flat()
      .reduce((a: any, b: any) => +a + +b, 0);
  }

  totalClassLevelCost(i: number, j?: number, k?: number) {

    if (typeof j === 'undefined') {
      return this.otherFees.controls[i]?.value?.financialCosts
        .map((item: any) => item.costItems).flat()
        .map((item: any) => item.semesters).flat()
        .map((item: any) => item.amount).flat()
        .reduce((a: any, b: any) => +a + +b, 0);
    } else if (typeof k === 'undefined') {
      return this.otherFees.controls[i].value.financialCosts[j]
        .costItems.flat()
        .map((item: any) => item.semesters).flat()
        .map((item: any) => item.amount).flat()
        .reduce((a: any, b: any) => +a + +b, 0);
    } else {
      return this.otherFees.controls[i].value.financialCosts[j]
        .costItems.flat()
        .map((item: any) => item.semesters).flat()
        .map((item: any) => (item.id === k ? item.amount : 0)).flat()
        .reduce((a: any, b: any) => +a + +b, 0);
    }

  }

  submitFeePlanForm() {
    if (this.feePlanForm.valid) {
      let academicYearId: number;
      this.submitInProgressSubject$.next(true);
      this.academicYearPlanId$.pipe(
        tap(id => academicYearId = id),
        mergeMap(id => this.financialPlanService.submit({academicYearId: id, data: this.feePlanForm.value})),
        takeUntil(this.destroyed$)
      ).subscribe({
        next: () => this.router.navigate(['../view'], {relativeTo: this.route}).then(
          () => {
            this.submitInProgressSubject$.next(false);
            this.store.dispatch(loadAcademicYearPlans({id: academicYearId}));
          }
        ),
        error: () => this.submitInProgressSubject$.next(false),
      });
    }

  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
