import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { UnitsService } from 'src/app/services/units.service';
import { AcademicYearService } from '../../../services/academic-year.service';
import { ELearningService } from '../../services/e-learning.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-e-learning-create-course',
  templateUrl: './e-learning-create-course.component.html',
  styleUrls: ['./e-learning-create-course.component.css']
})
export class ELearningCreateCourseComponent implements OnInit {
  triggerValidation: boolean;
  isSubmitting: boolean;
  classLevels$: Observable<any[]>;
  units$: Observable<any[]>;
  academicYears$: Observable<any[]>;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private classLevelervice: ClassLevelService,
    private unitsService: UnitsService,
    private academicYearService: AcademicYearService,
    private eLearningService: ELearningService
  ) { }
  newCourseForm: FormGroup;
  ngOnInit(): void {
    this.newCourseForm = this.fb.group({
      name: ['', Validators.required],
      unit: [null, Validators.required],
      classLevel: [null, Validators.required],
      academicYear: [null, Validators.required]
    });
    this.classLevels$ = this.classLevelervice.getAll();
    this.units$ = this.unitsService.getAll();
    this.academicYears$ = this.academicYearService.getAll();
  }
  submitCourseForm() {
    this.isSubmitting = true;
    if (this.newCourseForm.valid) {
      this.eLearningService.saveCourse(this.newCourseForm.value)
        .subscribe(res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success!',
            toastTime: 'Just now'
          }));
        }, () => {
          this.isSubmitting = false;
        });
    }

  }
}
