import {ChangeDetectionStrategy, Component} from '@angular/core';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {TeacherSubjectService} from '../services/teacher-subject.service';
import {TeacherService} from '../../admissions/services/teacher.service';
import {UnitsService} from '../../../services/units.service';
import {UnitLevelService} from '../../../services/unit-level.service';
import {combineLatest, Observable} from 'rxjs';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {formMixin} from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-manage-teacher-subject',
  templateUrl: './manage-teacher-subject.component.html',
  styleUrls: ['./manage-teacher-subject.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageTeacherSubjectComponent extends formMixin() {

  subjectsForm: FormGroup = this.fb.group({
    units: this.fb.array([])
  })

  teacherId$ = this.route.parent?.paramMap.pipe(
    map(params => Number(params.get('id')))
  )

  teacher$ = this.teacherId$?.pipe(
    mergeMap(id => this.teacherService.loadTeacherProfile$(id))
  ) as Observable<any>
  subjects$: Observable<any[]> = this.teacherId$?.pipe(
    mergeMap(id => this.teacherSubjectService.getSubjects(id))
  ) as Observable<any[]>
  allUnits$: Observable<any[]> = this.unitsService.all$;
  allUnitLevels$: Observable<any[]> = this.unitLevelService.getAll();
  v$ = combineLatest([this.teacher$, this.allUnits$, this.allUnitLevels$]).pipe(
    tap(([, units, unitLevels]) => units.forEach(unit => {
      const levels = this.fb.array([]);
      unitLevels.filter(({unit_id: unitId}) => unitId === unit.id)
        .forEach(unitLevel => {
          levels.push(this.fb.group({
            id: [unitLevel.id],
            level: [unitLevel.level],
            name: [unitLevel.name],
            teaches: [false] // TODO-me check me out
          }))
        });
      (this.subjectsForm.get('units') as FormArray).push(this.fb.group({
        id: [unit.id],
        name: [unit.abbreviation],
        levels
      }))
    })),
    map(([teacher]) => ({teacher}))
  )

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private teacherSubjectService: TeacherSubjectService,
    private unitsService: UnitsService,
    private unitLevelService: UnitLevelService,
    private fb: FormBuilder
  ) {
    super();
  }

  get units(): FormArray {
    return this.subjectsForm.get('units') as FormArray
  }

  subjectsFormSubmit() {
    this.submitInProgressSubject$.next(true)
  }
}
