import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter, map, mergeMap, switchMap, takeUntil, tap} from 'rxjs/operators';
import {UsersService} from 'src/app/services/users.service';
import {GuardiansService} from 'src/app/services/guardians.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StudentService} from 'src/app/services/student.service';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-student-guardian',
  templateUrl: './create-student-guardian.component.html',
  styleUrls: ['./create-student-guardian.component.css']
})
export class CreateStudentGuardianComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  emailPattern = '^[a-zA-Z]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z]+([\.-]?[a-zA-Z]+)*(\.[a-zA-Z]{2,3})+$';
  userIdentificationForm: FormGroup = this.fb.group({
    guardians: this.fb.array([this.buildGuardianProfile()])
  });
  usersData: any[] = [null];
  confirmData = [false];
  confirmedData = [false];
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
    super();
  }

  ngOnInit() {
    this.subscribeToEmailChecking();
  }

  get guardians(): FormArray {
    return this.userIdentificationForm.get('guardians') as FormArray;
  }

  addGuardians(): void {
    if (this.userIdentificationForm.valid) {
      this.guardians.push(this.buildGuardianProfile());
      this.usersData.push(null);
      this.confirmData.push(false);
      this.confirmedData.push(false);
      this.subscribeToEmailChecking();
    } else {
      this.triggerValidationSubject$.next(true);
      alert('please fix the errors to continue');
    }
  }

  subscribeToEmailChecking(): void {
    (this.userIdentificationForm.get('guardians') as FormArray).controls
      .forEach((element, i) => {
        (element.get('email') as FormControl).valueChanges
          .pipe(
            debounceTime(1000),
            filter(event => (new RegExp(this.emailPattern)).test(event)),
            switchMap(event => this.users.findIfEmailExists(event))
          ).subscribe({
          next: (data) => {
            this.confirmData[i] = !!data;
            this.usersData[i] = data;
            this.confirmedData[i] = true;
          }
        });
      });
  }

  removeGuardian(i: number): void {
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
    this.guardians.controls[i].patchValue({
      firstName: data.first_name,
      lastName: data.last_name,
      middleName: data.middle_name,
      otherNames: data.other_names,
      namePrefix: data.name_prefix_id,
      dateOfBirth: data.date_of_birth,
      birthCertNumber: data.birth_cert_number,
      gender: data.gender_id,
      religion: data.religion_id,
    });
    this.confirmData[i] = false;
    this.confirmedData[i] = true;
  }

  buildGuardianProfile(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
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

    this.submitInProgressSubject$.next(true);
    if (this.userIdentificationForm.valid) {
      this.userIdentificationForm.get('guardians')?.value.forEach((item: any) => {

        this.route.paramMap
          .pipe(
            map(params => Number(params.get('id'))),
            tap(id => this.studentId = id),
            mergeMap((id) => this.studentGuardian.submit({...item, ['student_id']: id})),
            takeUntil(this.destroyed$))
          .subscribe({
            next: () => this.router.navigate(['students', this.studentId, 'guardians']).then(
              () => this.submitInProgressSubject$.next(false)
            ),
            error: () => this.submitInProgressSubject$.next(false)
          });
      });
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }
}
