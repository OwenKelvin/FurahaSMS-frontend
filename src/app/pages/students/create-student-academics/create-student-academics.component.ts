import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AcademicYearService} from '../../academics/services/academic-year.service';
import {combineLatest, Observable, of} from 'rxjs';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {StudentAcademicsService} from '../services/student-academics.service';
import {AcademicYearUnitService} from '../../academics/services/academic-year-unit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassStreamService} from '../../academics/services/class-stream.service';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';
import {loadingMixin} from '../../../shared/mixins/loading.mixin';
import {formMixin, getFormValidationErrors} from '../../../shared/mixins/form.mixin';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-create-student-academics',
  templateUrl: './create-student-academics.component.html',
  styleUrls: ['./create-student-academics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateStudentAcademicsComponent
  extends subscribedContainerMixin(loadingMixin(formMixin()))
  implements OnInit {
  studentId$: Observable<number> = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  student$ = this.studentId$.pipe(
    mergeMap(id => this.studentService.loadStudentProfile$(id))
  )
  academicYears$: Observable<any> = this.academicYearService.all$;
  classLevels$: Observable<any> = this.classLevelService.getAll();
  streams$: Observable<any[]> = this.streamsService.all$;
  academicCategory: FormGroup = this.fb.group({
    academicYear: ['', [Validators.required]],
    classLevel: ['', Validators.required],
    unitLevels: this.fb.array([]),
    stream: []
  });
  v$ = combineLatest([this.streams$, this.student$, this.academicYears$, this.classLevels$]).pipe(
    map(([streams, student, academicYears, classLevels]) => ({streams, student, academicYears, classLevels}))
  );
  unitLevels$: Observable<any> = combineLatest([
    (this.academicCategory.get('academicYear') as FormControl).valueChanges,
    (this.academicCategory.get('classLevel') as FormControl).valueChanges
  ]).pipe(
    tap(() => this.loadingSubject$.next(false)),
    mergeMap(item => {
      if (item[0] === '' || item[1] === '') {
        return of([]);
      }
      return this.academicYearUnitService.getUnitsFor({academicYear: item[0], classLevel: item[1]});
    }),
    takeUntil(this.destroyed$)
  );
  academicYearUnitLevels: any;

  constructor(
    private classLevelService: ClassLevelService,
    private academicYearService: AcademicYearService,
    private studentAcademicsService: StudentAcademicsService,
    private academicYearUnitService: AcademicYearUnitService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private streamsService: ClassStreamService,
    private studentService: StudentService,
  ) {
    super();
  }

  ngOnInit() {
    this.loadingSubject$.next(undefined);
    this.unitLevels$.subscribe(res => {
      this.unitLevels.reset();
      while (this.unitLevels.length) {
        this.unitLevels.removeAt(0);
      }
      res.map(({id}: { id: number; }) => id).forEach((val: any) => {
        this.unitLevels.push(new FormControl(val));
      });
      this.academicYearUnitLevels = res;
      this.loadingSubject$.next(true);
      if (res.length === 0) {
        this.loadingSubject$.next(undefined);
      }
    });
  }

  get unitLevels(): FormArray {
    return this.academicCategory.get('unitLevels') as FormArray;
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.unitLevels.push(new FormControl(e.target.value));
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

    this.submitInProgressSubject$.next(true)
    const data = this.academicCategory.value;
    this.studentId$
      .pipe(
        mergeMap(studentId => this.studentAcademicsService.saveSubjectAllocation({studentId, data})))
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false)
          this.router.navigate(['students', (this.route.params as any).value.id, 'academics']).then();
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

  get formErrors() {
    return getFormValidationErrors({
      academicYear: this.academicCategory.get('academicYear') as AbstractControl,
      classLevel: this.academicCategory.get('classLevel') as AbstractControl,
      unitLevels: this.academicCategory.get('unitLevels') as AbstractControl,
      stream: this.academicCategory.get('stream') as AbstractControl,
    })
  }

}
