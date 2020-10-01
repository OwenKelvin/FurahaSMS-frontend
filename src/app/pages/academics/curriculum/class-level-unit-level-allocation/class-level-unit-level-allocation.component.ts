import {Component} from '@angular/core';
import {UnitLevelService} from '../../../../services/unit-level.service';
import {ClassLevelService} from '../../../../services/class-level.service';
import {forkJoin} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';
import {ClassLevelUnitLevelAllocationService} from '../../services/class-level-unit-level-allocation.service';

@Component({
  selector: 'app-class-level-unit-level-allocation',
  templateUrl: './class-level-unit-level-allocation.component.html',
  styleUrls: ['./class-level-unit-level-allocation.component.css']
})
export class ClassLevelUnitLevelAllocationComponent extends subscribedContainerMixin(formMixin()){
  unitLevels$ = this.unitLevelsService.getAll();
  classLevels$ = this.classLevelService.getAll();
  classLevelsWithUnits$ = this.classLevelUnitLevelService.getAll();
  itemForm: FormGroup = this.fb.group({
    allocations: this.fb.array([])
  })
  v$ = forkJoin([this.unitLevels$, this.classLevels$]).pipe(
    tap(([, classLevels]) => {
      this.clearFormArray(this.allocations)
      classLevels.forEach(({id, name}: any) => this.allocations.push(this.fb.group({
        id, name, unitLevels: [[1, 2]]
      })))
    }),
    map(([unitLevels, classLevels]) => ({unitLevels, classLevels})),
  )
  get allocations(): FormArray {
    return this.itemForm.get('allocations') as FormArray
  }
  constructor(
    private fb: FormBuilder,
    private unitLevelsService: UnitLevelService,
    private classLevelService: ClassLevelService,
    private classLevelUnitLevelService: ClassLevelUnitLevelAllocationService
    ) {
    super();
  }

}
