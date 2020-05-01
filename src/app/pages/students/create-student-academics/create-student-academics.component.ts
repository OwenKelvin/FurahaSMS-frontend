import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcademicYearService } from '../../academics/services/academic-year.service';
import { Observable, combineLatest, of } from 'rxjs';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { mergeMap, tap, map, takeWhile } from 'rxjs/operators';
import { StudentAcademicsService } from '../services/student-academics.service';
import { AcademicYearUnitService } from '../../academics/services/academic-year-unit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student-academics',
  templateUrl: './create-student-academics.component.html',
  styleUrls: ['./create-student-academics.component.css']
})
export class CreateStudentAcademicsComponent implements OnInit, OnDestroy {
  academicYears$: Observable<any> = this.academicYearService.getAll();
  classLevels$: Observable<any> = this.classLevelService.getAll();
  academicCategory: FormGroup = this.fb.group({
    academicYear: [''],
    classLevel: [''],
    unitLevels: this.fb.array([])
  });
  unitLevels$: Observable<any> = combineLatest([
    (this.academicCategory.get('academicYear') as FormControl).valueChanges,
    (this.academicCategory.get('classLevel') as FormControl).valueChanges
  ])
    .pipe(
      tap(() => this.unitsLoaded = false),
      mergeMap(item => {
        if (item[0] === '' || item[1] === '') {
          return of([]);
        }
        return this.academicYearUnitService.getUnitsFor({ academicYear: item[0], classLevel: item[1] });
      })
    );
  academicYearUnitLevels: any;
  unitsLoaded: boolean | undefined;
  triggerValidation: boolean;
  isSubmitting = false;
  componentIsActive = true;

  constructor(
    private classLevelService: ClassLevelService,
    private academicYearService: AcademicYearService,
    private studentAcademicsService: StudentAcademicsService,
    private academicYearUnitService: AcademicYearUnitService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.unitLevels$.subscribe(res => {
      if (res.length > 0) {
        this.unitLevels.setValue([]); // TODO fails if we reset the value
      }
      res.map(({ id }: { id: number; }) => id).forEach((val: any) => {
        this.unitLevels.push(new FormControl(val));
      });
      this.academicYearUnitLevels = res;
      this.unitsLoaded = true;
      if (res.length === 0) {
        this.unitsLoaded = undefined;
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
    let studentIdParam: any;
    this.isSubmitting = true;
    const data = this.unitLevels.value;
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(map(params => params.get('id')))
      .pipe(mergeMap(studentId => {
        studentIdParam = studentId;
        return this.studentAcademicsService.saveSubjectAllocation({ studentId, data });
      }))
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['students', studentIdParam, 'academics']);
        },
        error: () => this.isSubmitting = false
      });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
