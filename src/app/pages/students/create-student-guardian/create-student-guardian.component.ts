import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { debounceTime, takeWhile, map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { GuardiansService } from 'src/app/services/guardians.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student-guardian',
  templateUrl: './create-student-guardian.component.html',
  styleUrls: ['./create-student-guardian.component.css']
})
export class CreateStudentGuardianComponent implements OnInit, OnDestroy {
  emailPattern = '^[a-zA-Z]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z]+([\.-]?[a-zA-Z]+)*(\.[a-zA-Z]{2,3})+$';
  userIdentificaionForm: FormGroup = this.fb.group({
    guardians: this.fb.array([this.buildGuardianProfile()])
  });
  usersData: any[];
  confirmData: boolean[];

  triggerValidation: boolean;
  isSubmitting = false;
  confirmedData: boolean[];
  componentIsActive = true;
  student$: Observable<any> = this.route.paramMap
    .pipe(
      map(params => Number(params.get('id'))),
      mergeMap(id => this.studentService.loadStudentProfile$(id))
    );

  studentId: number;
  constructor(
    private studentGuardian: GuardiansService,
    private users: UsersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {
    this.usersData = [null];
    this.confirmData = [false];
    this.confirmedData = [false];
  }

  ngOnInit() {
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
          .pipe(
            debounceTime(1000),
            takeWhile(() => this.componentIsActive))
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
    this.guardians.controls[i].get('firstName')?.setValue(data.first_name);
    this.guardians.controls[i].get('lastName')?.setValue(data.last_name);
    this.guardians.controls[i].get('middleName')?.setValue(data.middle_name);
    this.guardians.controls[i].get('otherNames')?.setValue(data.other_names);
    this.guardians.controls[i].get('namePrefix')?.setValue(data.name_prefix_id);
    this.guardians.controls[i].get('dateOfBirth')?.setValue(data.date_of_birth);
    this.guardians.controls[i].get('birthCertNumber')?.setValue(data.birth_cert_number);
    this.guardians.controls[i].get('gender')?.setValue(data.gender_id);
    this.guardians.controls[i].get('religion')?.setValue(data.religion_id);
    this.confirmData[i] = false;
    this.confirmedData[i] = true;
  }
  buildGuardianProfile(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(2)],
      lastName: ['', Validators.required, Validators.minLength(2)],
      otherNames: [''],
      middleName: [''],
      namePrefix: [''],
      gender: [null],
      religion: [null],
      dateOfBirth: [null, Validators.required],
      autogenerateIdNumber: [true, Validators.required],
      idNumber: [],
      // idNumber: new FormControl(
      //   { value: '', disabled: true },
      //   Validators.required, this.idNumberValidator.studentIdTaken.bind(this.idNumberValidator)),
      birthCertNumber: [''],
      email: ['', [
        Validators.email,
        Validators.required,
        Validators.pattern(this.emailPattern), Validators.required
      ]],
      phone: ['', []],
      relation: ['', Validators.required]
    });
  }
  submitGuardianForm() {
    // TODO admission number hard coded

    this.isSubmitting = true;
    if (this.userIdentificaionForm.valid) {
      this.userIdentificaionForm.get('guardians')?.value.forEach((item: any) => {

        this.route.paramMap
          .pipe(
            map(params => params.get('id')),
            mergeMap((id) => this.studentGuardian.submit({ ...item, student_id: id })),
            takeWhile(() => this.componentIsActive))
          .subscribe({
            next: () => {
              this.isSubmitting = false;
              this.router.navigate(['students', this.studentId, 'guardians']);
            },
            error: () => this.isSubmitting = false
          });
      });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
