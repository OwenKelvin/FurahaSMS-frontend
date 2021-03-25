import {Component} from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {UnitLevelService} from '../../../../services/unit-level.service';
import {ClassLevelUnitLevelAllocationService} from '../../services/class-level-unit-level-allocation.service';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-class-level-unit-level-allocation',
  templateUrl: './manage-class-level-unit-level-allocation.component.html',
  styleUrls: ['./manage-class-level-unit-level-allocation.component.css']
})
export class ManageClassLevelUnitLevelAllocationComponent extends subscribedContainerMixin(formMixin()) {

  loadData$ = new BehaviorSubject(null);
  unitLevels$ = this.unitLevelsService.getAll();
  classLevelsWithUnits$ = this.loadData$.pipe(
    mergeMap(() => this.classLevelUnitLevelService.getAll())
  );

  itemForm: FormGroup = this.fb.group({
    allocations: this.fb.array([])
  });
  v$ = combineLatest([this.unitLevels$, this.classLevelsWithUnits$]).pipe(
    tap(([, classLevels]) => {
      this.clearFormArray(this.allocations);
      classLevels.forEach(({id, name, taughtUnits}: any) => this.allocations.push(this.fb.group({
        id, name, unitLevels: [taughtUnits]
      })));
    }),
    map(([unitLevels, classLevels]) => ({unitLevels, classLevels})),
  );

  constructor(
    private fb: FormBuilder,
    private unitLevelsService: UnitLevelService,
    private classLevelUnitLevelService: ClassLevelUnitLevelAllocationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  get allocations(): FormArray {
    return this.itemForm.get('allocations') as FormArray;
  }

  submitForm() {
    this.submitInProgressSubject$.next(true);
    this.classLevelUnitLevelService.save(this.allocations.value).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        this.submitInProgressSubject$.next(false);
        this.loadData$.next(null);
        this.router.navigate(['../view'], {relativeTo: this.route}).then();
      },
      error: () => this.submitInProgressSubject$.next(false)
    });
  }
}
