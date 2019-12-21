import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AppState } from 'src/app/store/reducers';
import { debounceTime } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { GuardiansService } from 'src/app/services/guardians.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-create-student-guardian',
  templateUrl: './create-student-guardian.component.html',
  styleUrls: ['./create-student-guardian.component.css']
})
export class CreateStudentGuardianComponent implements OnInit {
  userIdentificaionForm: FormGroup;
  usersData: any[];
  confirmData: boolean[];
  validators = {
    firstName: [Validators.required, Validators.minLength(2)],
    lastName: [Validators.required, Validators.minLength(2)],
    middleName: [],
    otherNames: [],
    namePrefix: [],
    dateOfBirth: [Validators.required],
    email: [
      Validators.email,
      Validators.required,
      Validators.pattern('^[a-zA-Z]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z]+([\.-]?[a-zA-Z]+)*(\.[a-zA-Z]{2,3})+$'), Validators.required]
  };
  triggerValidation: boolean;
  isSubmitting: boolean;
  constructor(
    private studentGuardian: GuardiansService,
    private users: UsersService,
    private store: Store<AppState>, private fb: FormBuilder) {
    this.usersData = [null];
    this.confirmData = [false];
  }

  ngOnInit() {

    this.userIdentificaionForm = this.fb.group({
      guardians: this.fb.array([this.buildGuardianProfile()])
    });
    this.subscribeToEmailChecking();
  }
  get guardians(): FormArray {
    return this.userIdentificaionForm.get('guardians') as FormArray;
  }
  addGuardians(): void {
    if (this.userIdentificaionForm.valid) {
      this.guardians.push(this.buildGuardianProfile());
      this.usersData.push(null);
      this.confirmData.push(false);
      this.subscribeToEmailChecking();
    } else {
      this.triggerValidation = true;
      alert('please fix the errors to continue');
    }
  }
  subscribeToEmailChecking(): void {
    (this.userIdentificaionForm.get('guardians') as FormArray).controls.forEach((element, i) => {
      element.get('email').valueChanges.pipe(
        debounceTime(1000)
      ).subscribe(
        (event) => {
          if (event && event.length && event.length > 5) {
            this.users.findIfEmailExists(event).subscribe(data => {
              this.confirmData[i] = false;
              if (data) {
                this.confirmData[i] = true;
              }
              this.usersData[i] = data;
            });
          }
        }
      );
    });
  }
  removeGuadian(i): void {
    this.guardians.controls[i].get('phoneDetails').get('phoneNumber').setErrors(null);
    const confirmed = confirm(' Are You sure you wish to remove Item?');
    if (confirmed) {
      this.guardians.controls.splice(i, 1);
      this.usersData.splice(i, 1);
      this.confirmData.splice(i, 1);
    }
  }
  clearEmail(i) {
    this.guardians.controls[i].get('email').setValue('');
    this.usersData[i] = null;
    this.confirmData[i] = false;
  }
  updateFieldsForEmail(i) {
    const data = this.usersData[i];
    this.guardians.controls[i].get('firstName').setValue(data.first_name);
    this.guardians.controls[i].get('lastName').setValue(data.last_name);
    this.guardians.controls[i].get('middleName').setValue(data.middle_name);
    this.guardians.controls[i].get('otherNames').setValue(data.other_names);
    this.guardians.controls[i].get('namePrefix').setValue(data.name_prefix_id);
    this.guardians.controls[i].get('dateOfBirth').setValue(data.date_of_birth);
    this.guardians.controls[i].get('birthCertNumber').setValue(data.birth_cert_number);
    this.guardians.controls[i].get('gender').setValue(data.gender_id);
    this.guardians.controls[i].get('religion').setValue(data.religion_id);
    this.confirmData[i] = false;
  }
  buildGuardianProfile(): FormGroup {
    return this.fb.group({
      firstName: ['', this.validators.firstName],
      lastName: ['', this.validators.lastName],
      otherNames: ['', this.validators.otherNames],
      middleName: ['', this.validators.middleName],
      namePrefix: ['', this.validators.namePrefix],
      gender: [null],
      religion: [null],
      dateOfBirth: [null, this.validators.dateOfBirth],
      autogenerateIdNumber: [true, Validators.required],
      idNumber: [],
      // idNumber: new FormControl(
      //   { value: '', disabled: true },
      //   Validators.required, this.idNumberValidator.studentIdTaken.bind(this.idNumberValidator)),
      birthCertNumber: [''],
      email: ['', this.validators.email],
      phoneNumber: [''],
      phoneDetails: this.fb.group({
        phoneCode: [254],
        phoneNumber: ['']
      }),
      phone: [''],
      relation: ['', Validators.required]
    });
  }
  submitGuardianForm() {
    // TODO admission number hard coded
    this.isSubmitting = true;
    if (this.userIdentificaionForm.valid) {
      this.userIdentificaionForm.get('guardians').value.forEach(item => {
        this.studentGuardian.submit({ ...item, student_id: 24 })
          .subscribe(data => {
            this.store.dispatch(loadToastShowsSuccess({
              showMessage: true,
              toastBody: 'Successfully created guardian',
              toastHeader: 'Success',
              toastTime: 'Just Now'
            }));
          });
      });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
}