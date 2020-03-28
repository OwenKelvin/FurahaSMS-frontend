import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IdNumberValidator } from 'src/app/validators/student-id-taken.validator';
import { StudentService } from 'src/app/services/student.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { takeWhile, tap } from 'rxjs/operators';
import { selectGenders, selectReligions } from 'src/app/store/selectors/app.selectors';
import * as fromGenders from 'src/app/store/reducers/gender.reducer'
import * as fromReligions from 'src/app/store/reducers/religion.reducer'
import { loadGenders } from 'src/app/store/actions/gender.actions';
import { loadReligions } from 'src/app/store/actions/religion.actions';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit, CanComponentDeactivate {
  newStudentForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  formSubmitted: boolean;
  componentIsActive: boolean;
  genders$: Observable<fromGenders.State>;
  religions$: Observable<fromReligions.State>;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private idNumberValidator: IdNumberValidator,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.genders$ = this.store.pipe(select(selectGenders))
      .pipe(tap(gender => !gender[0].id ? this.store.dispatch(loadGenders()) : ''))
    this.religions$ = this.store.pipe(select(selectReligions))
      .pipe(tap(religion => !religion[0].id ? this.store.dispatch(loadReligions()) : ''))
    
    this.componentIsActive = true;
    this.newStudentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      schoolIdNumber: [''],
      middleName: [''],
      otherNames: [''],
      autoGenerateId: [false, Validators.required],
      namePrefix: [''],
      gender: [null],
      religion: [null],
      dateOfBirth: [null, Validators.required],
    });
    this.autoGenerate.valueChanges
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(checked => {
        if (checked) {
          this.schoolIdNumber.setValidators([Validators.required]);
          this.schoolIdNumber.setAsyncValidators([this.idNumberValidator.studentIdTaken.bind(this.idNumberValidator)]);
        } else {
          this.schoolIdNumber.setValidators(null);
        }
        this.schoolIdNumber.updateValueAndValidity();
      });
  }
  get schoolIdNumber(): FormControl {
    return this.newStudentForm.get('schoolIdNumber') as FormControl;
  }
  get autoGenerate(): FormControl {
    return this.newStudentForm.get('autoGenerateId') as FormControl;
  }
  submitNewStudentForm() {
    this.isSubmitting = true;
    if (this.newStudentForm.valid) {
      this.studentService.createNewStudent(this.newStudentForm.value)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe((res: any) => {

          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Successful',
            toastTime: 'just now'
          }));
          this.isSubmitting = false;
          this.formSubmitted = true;
          this.router.navigate(['/students', res.data.id]);
        }, () => {
          this.formSubmitted = true;
          this.isSubmitting = false;
        });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.newStudentForm.dirty && !this.formSubmitted) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
