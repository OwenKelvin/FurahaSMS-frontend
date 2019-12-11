import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { Observable } from 'rxjs';
import { IdNumberValidator } from 'src/app/validators/student-id-taken.validator';
import { StudentService } from 'src/app/services/student.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit, CanComponentDeactivate {
  newStudentForm: FormGroup;
  triggerValidation: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private idNumberValidator: IdNumberValidator,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.newStudentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      schoolIdNumber: [''],
      middleName: [''],
      otherNames: [''],
      autoGenerateId: [false, Validators.required],
      namePrefix: [''],
      gender: [null],
      religion: [null],
      dateOfBirth: [null, Validators.required],
    });
    this.autoGenerate.valueChanges.subscribe(checked => {
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
    if (this.newStudentForm.valid) {
      this.studentService.createNewStudent(this.newStudentForm.value).subscribe(student => {
        console.log(student);
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true, toastBody: 'Student Successfully created', toastHeader: 'Successful', toastTime: 'just now'
        }))
      });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.newStudentForm.dirty) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
