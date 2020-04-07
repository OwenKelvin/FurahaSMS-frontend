import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IdNumberValidator } from 'src/app/validators/student-id-taken.validator';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { takeWhile } from 'rxjs/operators';
import * as fromGenders from 'src/app/store/reducers/gender.reducer';
import * as fromReligions from 'src/app/store/reducers/religion.reducer';
import { GenderService } from 'src/app/services/gender.service';
import { ReligionService } from 'src/app/services/religion.service';

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
    private fb: FormBuilder,
    private idNumberValidator: IdNumberValidator,
    private studentService: StudentService,
    private router: Router,
    private genderService: GenderService,
    private religionService: ReligionService,
  ) { }

  ngOnInit() {
    this.genders$ = this.genderService.loadAll$;
    this.religions$ = this.religionService.loadAll$;

    this.componentIsActive = true;
    this.newStudentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      schoolIdNumber: [''],
      middleName: [''],
      otherNames: [''],
      autoGenerateId: [false, Validators.required],
      namePrefix: [''],
      gender: [''],
      religion: [''],
      dateOfBirth: ['', Validators.required],
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
        .subscribe({
          next: (res: any) => {
            this.isSubmitting = false;
            this.formSubmitted = true;
            this.router.navigate(['/students', res.data.id]);
          }, error: () => {
            this.formSubmitted = true;
            this.isSubmitting = false;
          }
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
