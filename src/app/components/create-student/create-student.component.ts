import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit, CanComponentDeactivate {
  newStudentForm: FormGroup;
  triggerValidation: boolean;
  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.newStudentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      schoolIdNumber: [''],
      middleName: [''],
      otherNames: [''],
      autoGenerateId: [false, Validators.required],
    });
    this.autoGenerate.valueChanges.subscribe(checked => {
      if (checked) {
        this.schoolIdNumber.setValidators([Validators.required]);
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
  validateAutogenerate(value: boolean) {
    this.autoGenerate.clearValidators();
    if (value) {
      this.autoGenerate.setValidators([Validators.required]);
    } else {
      this.autoGenerate.setValidators([]);
    }
    this.autoGenerate.updateValueAndValidity();
    this.newStudentForm.updateValueAndValidity();
    console.log(this.autoGenerate);

  }
  submitNewStudentForm() {
    if (this.newStudentForm.valid) {

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
