import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AppState } from 'src/app/store/reducers';
import { debounceTime, takeWhile, map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { GuardiansService } from 'src/app/services/guardians.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student-guardian',
  templateUrl: './create-student-guardian.component.html',
  styleUrls: ['./create-student-guardian.component.css']
})
export class CreateStudentGuardianComponent implements OnInit, OnDestroy {
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
  confirmedData: boolean[];
  componentIsActive: boolean;
  constructor(
    private studentGuardian: GuardiansService,
    private users: UsersService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.usersData = [null];
    this.confirmData = [false];
    this.confirmedData = [false];
  }

  ngOnInit() {
    this.componentIsActive = true;
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
      this.confirmedData.push(false);
      this.subscribeToEmailChecking();
    } else {
      this.triggerValidation = true;
      alert('please fix the errors to continue');
    }
  }
  subscribeToEmailChecking(): void {
    (this.userIdentificaionForm.get('guardians') as FormArray).controls
      .forEach((element, i) => {
        (element.get('email') as FormControl).valueChanges
          .pipe(debounceTime(1000))
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(
          (event) => {
            if (event && event.length && event.length > 5) {
              this.users.findIfEmailExists(event).subscribe(data => {
                this.confirmData[i] = false;
                if (data) {
                  this.confirmData[i] = true;
                }
                this.usersData[i] = data;
                this.confirmedData[i] = true;
              });
            }
          }
        );
    });
  }
  removeGuadian(i: number): void {
    (this.guardians.controls[i].get('phone') as FormControl).setErrors(null);
    const confirmed = confirm(' Are You sure you wish to remove Item?');
    if (confirmed) {
      this.guardians.controls.splice(i, 1);
      this.usersData.splice(i, 1);
      this.confirmData.splice(i, 1);
      this.confirmedData.splice(i, 1);
    }
    this.guardians.updateValueAndValidity();
  }
  clearEmail(i: number) {
    ((this.guardians.controls[i] as FormGroup).get('email') as FormControl).setValue('');
    this.usersData[i] = null;
    this.confirmData[i] = false;
    this.confirmedData[i] = false;
  }
  updateFieldsForEmail(i: number) {
    const data = this.usersData[i];
    (this.guardians.controls[i].get('firstName') as FormControl).setValue(data.first_name);
    (this.guardians.controls[i].get('lastName') as FormControl).setValue(data.last_name);
    (this.guardians.controls[i].get('middleName') as FormControl).setValue(data.middle_name);
    (this.guardians.controls[i].get('otherNames') as FormControl).setValue(data.other_names);
    (this.guardians.controls[i].get('namePrefix') as FormControl).setValue(data.name_prefix_id);
    (this.guardians.controls[i].get('dateOfBirth') as FormControl).setValue(data.date_of_birth);
    (this.guardians.controls[i].get('birthCertNumber') as FormControl).setValue(data.birth_cert_number);
    (this.guardians.controls[i].get('gender') as FormControl).setValue(data.gender_id);
    (this.guardians.controls[i].get('religion') as FormControl).setValue(data.religion_id);
    this.confirmData[i] = false;
    this.confirmedData[i] = true;
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
      phone: ['', []],
      relation: ['', Validators.required]
    });
  }
  submitGuardianForm() {
    // TODO admission number hard coded

    this.isSubmitting = true;
    if (this.userIdentificaionForm.valid) {
      (this.userIdentificaionForm.get('guardians') as FormArray).value.forEach((item: any) => {

        this.route.paramMap.pipe(
          map(params => params.get('id'))
        ).pipe(
          takeWhile(() => this.componentIsActive)
        )
        .pipe(
          mergeMap((id) => this.studentGuardian.submit({ ...item, student_id: id }))
        ).subscribe(res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success',
            toastTime: 'Just Now'
          }));
        }, err => this.isSubmitting = false);



        // this.studentGuardian.submit({ ...item, student_id: 24 })
        //   .subscribe(res => {
        //     this.isSubmitting = false;
        //     this.store.dispatch(loadToastShowsSuccess({
        //       showMessage: true,
        //       toastBody: res.message,
        //       toastHeader: 'Success',
        //       toastTime: 'Just Now'
        //     }));
        //   }, err => this.isSubmitting = false);
      });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
