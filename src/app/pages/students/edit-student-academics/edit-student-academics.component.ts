import {ChangeDetectionStrategy, Component} from '@angular/core';
import {StudentAcademicsService} from '../services/student-academics.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {UnitLevelService} from '../../../services/unit-level.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import {AcademicYearService} from '../../academics/services/academic-year.service';
import {ClassLevelService} from '../../../services/class-level.service';
import {StudentService} from '../../../services/student.service';
import {ClassStreamService} from '../../academics/services/class-stream.service';
import {formMixin} from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-edit-student-academics',
  templateUrl: './edit-student-academics.component.html',
  styleUrls: ['./edit-student-academics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditStudentAcademicsComponent extends formMixin() {

  streams$: Observable<any[]> = this.streamsService.all$;

  params$ = this.route.paramMap.pipe(
    map(params => ({
      studentId: Number(params.get('studentId')),
      academicYearId: Number(params.get('id')),
      classLevelId: Number(params.get('classLevelId'))
    })));

  studentStream$ = this.params$.pipe(
    mergeMap(params => this.studentService.getStreamFor(params)),
    tap(({id}) => {
      this.unitLevelForm.get('stream')?.setValue(id);
    })
  );

  classLevel$ = this.params$.pipe(
    map(({classLevelId}) => classLevelId),
    mergeMap(id => this.classLevelService.getItemById(id))
  );

  academicYear$ = this.params$.pipe(
    map(({academicYearId}) => academicYearId),
    mergeMap(id => this.academicYearService.getAcademicYearWithId({id}))
  );

  $academics: Observable<any[]> = this.params$.pipe(
    mergeMap(params => this.studentAcademicsService.getAcademicsFor(params))
  );
  $unitLevels: Observable<any[]> = this.params$.pipe(
    mergeMap(({academicYearId, classLevelId}) => this.unitLevelService.getFilter({academicYearId, classLevelId})),
    map(items => (items as any[]).map(item => ({
      ...item,
      classLevelId: item.class_level_id,
      unitLevelId: item.unit_level_id,
      unitLevelName: item.unit_level_name
    })))
  );

  student$ = this.params$.pipe(
    map(({studentId}) => studentId),
    mergeMap(id => this.studentService.loadStudentProfile$(id))
  );

  v$ = combineLatest([this.$academics, this.$unitLevels, this.academicYear$, this.classLevel$,
    this.student$, this.streams$, this.studentStream$]).pipe(
    tap(([academics, unitLevels]) => {
      const unitLevelIds = academics.map(({unitLevelId: id}: any) => id);
      this.unitLevels.reset();
      while (this.unitLevels.length) {
        this.unitLevels.removeAt(0);
      }
      unitLevels.forEach((item: any) => {

        this.unitLevels.push(
          this.fb.group({
            id: [item.unitLevelId],
            name: [item.unitLevelName],
            value: [unitLevelIds.includes(item.unitLevelId)],
          })
        );
      });
      this.unitLevels.updateValueAndValidity();
      this.unitLevelForm.updateValueAndValidity();
    }),
    map(([, , academicYear, classLevel, student, streams]) =>
      ({academicYear, classLevel, student, streams}))
  );

  unitLevelForm: FormGroup = this.fb.group({
    unitLevels: this.fb.array([]),
    stream: []
  });

  get unitLevels() {
    return this.unitLevelForm.get('unitLevels') as FormArray;
  }

  constructor(
    private studentAcademicsService: StudentAcademicsService,
    private route: ActivatedRoute,
    private unitLevelService: UnitLevelService,
    private fb: FormBuilder,
    private academicYearService: AcademicYearService,
    private classLevelService: ClassLevelService,
    private studentService: StudentService,
    private streamsService: ClassStreamService,
    private router: Router
  ) {
    super();
  }

  submitUnitLevelForm() {
    this.submitInProgressSubject$.next(true);
    this.params$.pipe(
      mergeMap(params =>
        this.studentAcademicsService.saveAcademicsFor({...params, ...this.unitLevelForm.value})
      )
    ).subscribe({
      next: () => {
        this.submitInProgressSubject$.next(false);
        this.router.navigate(['/students', (this.route.params as any).value.studentId, 'academics']).then();
      },
      error: () => this.submitInProgressSubject$.next(false)
    });
  }
}
