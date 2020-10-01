import {Component} from '@angular/core';
import {UnitLevelService} from '../../../../services/unit-level.service';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';
import {ClassLevelUnitLevelAllocationService} from '../../services/class-level-unit-level-allocation.service';

@Component({
  selector: 'app-class-level-unit-level-allocation',
  templateUrl: './class-level-unit-level-allocation.component.html',
  styleUrls: ['./class-level-unit-level-allocation.component.css']
})
export class ClassLevelUnitLevelAllocationComponent extends subscribedContainerMixin(formMixin()) {
  loadData$ = new BehaviorSubject(null);
  unitLevels$ = this.unitLevelsService.getAll();
  classLevelsWithUnits$ = this.loadData$.pipe(
    mergeMap(() => this.classLevelUnitLevelService.getAll())
  )

  itemForm: FormGroup = this.fb.group({
    allocations: this.fb.array([])
  })
  v$ = combineLatest([this.unitLevels$, this.classLevelsWithUnits$]).pipe(
    tap(([, classLevels]) => {
      this.clearFormArray(this.allocations)
      classLevels.forEach(({id, name, taughtUnits}: any) => this.allocations.push(this.fb.group({
        id, name, unitLevels: [taughtUnits]
      })))
    }),
    map(([unitLevels, classLevels]) => ({unitLevels, classLevels})),
  )

  get allocations(): FormArray {
    return this.itemForm.get('allocations') as FormArray
  }

  submitForm() {
    this.submitInProgressSubject$.next(true);
    this.classLevelUnitLevelService.save(this.allocations.value).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        this.submitInProgressSubject$.next(false)
        this.loadData$.next(null)
      },
      error: () => this.submitInProgressSubject$.next(false)
    })
  }

  constructor(
    private fb: FormBuilder,
    private unitLevelsService: UnitLevelService,
    private classLevelUnitLevelService: ClassLevelUnitLevelAllocationService
  ) {
    super();
  }

}
