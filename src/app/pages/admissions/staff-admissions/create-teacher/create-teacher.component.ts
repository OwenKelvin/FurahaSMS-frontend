import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TeacherService} from '../../services/teacher.service';
import {select, Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {debounceTime, filter, mergeMap, takeUntil} from 'rxjs/operators';
import {UsersService} from 'src/app/services/users.service';
import {Router} from '@angular/router';
import {GenderService} from 'src/app/services/gender.service';
import {ReligionService} from 'src/app/services/religion.service';
import {selectGenders, selectReligions} from 'src/app/store/selectors/app.selectors';
import {Observable} from 'rxjs';
import {selectStaffType} from '../../store/selectors/staff-type.selectors';
import {SupportStaffService} from 'src/app/pages/support-staffs/services/support-staff.service';
import {EmailValidatorDirective} from 'src/app/shared/validators/email.validator';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  @Input() supportStaff = 0;
  newTeacherForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    middleName: [''],
    otherNames: [''],
    religion: [''],
    gender: [''],
    phone: [''],
    namePrefix: ['']
  });
  confirmData: boolean;
  usersData: any;
  confirmedData: boolean;
  genders$: Observable<any[]> = this.store.pipe(select(selectGenders));
  religions$: Observable<any[]> = this.store.pipe(select(selectReligions));
  staffType$: Observable<any> = this.store.pipe(
    select(selectStaffType(this.supportStaff))
  );

  constructor(
    private users: UsersService,
    private store: Store<AppState>,
    private fb: FormBuilder, private teacherService: TeacherService,
    private router: Router,
    private supportStaffService: SupportStaffService,
    private genderService: GenderService,
    private religionService: ReligionService,
  ) {
    super();
  }

  ngOnInit() {
    this.supportStaffService.loadAllStaffTypes$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.genderService.loadAll$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.religionService.loadAll$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.subscribeToEmailChecking();
  }

  resetForm() {
    this.newTeacherForm.patchValue({
      email: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      middleName: '',
      otherNames: '',
      religion: '',
      gender: '',
      phone: '',
      namePrefix: ''
    });
  }

  subscribeToEmailChecking(): void {
    this.email.valueChanges
      .pipe(debounceTime(1000),
        filter(() => !(new EmailValidatorDirective()).validate(this.email)),
        mergeMap((event) => this.users.findIfEmailExists(event)),
        takeUntil(this.destroyed$))
      .subscribe(data => {
        this.confirmData = !!data;
        this.usersData = data;
        this.confirmedData = true;
      });
  }

  get email(): FormControl {
    return this.newTeacherForm.get('email') as FormControl;
  }

  updateFieldsForEmail() {
    const data = {
      firstName: this.usersData.first_name,
      lastName: this.usersData.last_name,
      middleName: this.usersData.middle_name,
      otherNames: this.usersData.other_names,
      dateOfBirth: this.usersData.date_of_birth,
      gender: this.usersData.gender_id,
      religion: this.usersData.religion_id,
      phone: this.usersData.phone,
      namePrefix: this.usersData.name_prefix_id,
      email: this.usersData.email,
    };

    this.newTeacherForm.setValue(data);
    this.confirmData = false;
    this.confirmedData = true;
  }

  clearEmail() {
    this.usersData = null;
    this.confirmData = false;
    this.confirmedData = false;
    this.resetForm();
  }

  submitNewTeacherForm() {
    this.submitInProgressSubject$.next(true);
    if (this.supportStaff && this.supportStaff !== 0) {
      this.createSupportStaff();
    } else {
      this.createTeacher();
    }

  }

  createTeacher() {
    this.teacherService.saveTeacher(this.newTeacherForm.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res) => this.router.navigate(['/teachers', res.data.id, 'info']).then(
          () => this.submitInProgressSubject$.next(false)
        )
        , error: () => this.submitInProgressSubject$.next(false)
      });
  }

  createSupportStaff() {
    this.supportStaffService.save({...this.newTeacherForm.value, ['staff_type']: this.supportStaff})
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: res => this.router.navigate(['/support-staffs', res.data.id, 'info']).then(
          () => this.submitInProgressSubject$.next(false)
        )
        , error: () => this.submitInProgressSubject$.next(false)
      });
  }
}
