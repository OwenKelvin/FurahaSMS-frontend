import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { debounceTime, takeWhile, mergeMap, filter, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { GenderService } from 'src/app/services/gender.service';
import { ReligionService } from 'src/app/services/religion.service';
import { selectGenders, selectReligions } from 'src/app/store/selectors/app.selectors';
import { Observable } from 'rxjs';
import { selectStaffType } from '../../store/selectors/staff-type.selectors';
import { SupportStaffService } from 'src/app/pages/support-staffs/services/support-staff.service';
import { EmailValidatorDirective } from 'src/app/shared/validators/email.validator';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit, OnDestroy {
  @Input() supportStaff: number;
  newTeacherForm: FormGroup;
  isSubmitting = false;
  triggerValidation: boolean;
  componentIsActive = true;
  confirmData: boolean;
  usersData: any;
  confirmedData: boolean;
  genders$: Observable<any[]> = this.store.pipe(select(selectGenders));
  religions$: Observable<any[]> = this.store.pipe(select(selectReligions));
  staffType$ : Observable<any>

  constructor(
    private users: UsersService,
    private store: Store<AppState>,
    private fb: FormBuilder, private teacherService: TeacherService,
    private router: Router,
    private supportStaffService: SupportStaffService,
    private genderService: GenderService,
    private religionService: ReligionService,
  ) { }

  ngOnInit() {
    this.supportStaffService.loadAllStaffTypes$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.genderService.loadAll$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.religionService.loadAll$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.resetForm();
    this.subscribeToEmailChecking();
    this.staffType$ = this.store.pipe(
      select(selectStaffType(this.supportStaff))
    )
  }

  resetForm() {
    this.newTeacherForm = this.fb.group({
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
  }
  subscribeToEmailChecking(): void {
    this.email.valueChanges
      .pipe(debounceTime(1000),
        filter(() => !(new EmailValidatorDirective()).validate(this.email)),
        mergeMap((event) => this.users.findIfEmailExists(event)),
        takeWhile(() => this.componentIsActive))
      .subscribe(data => {
        this.confirmData = false;
        if (data) {
          this.confirmData = true;
        }
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
    this.isSubmitting = true;
    if (this.supportStaff && this.supportStaff !== 0) {
      this.createSupportStaff();
    } else {
      this.createTeacher();
    }

  }
  createTeacher() {
    this.teacherService.store(this.newTeacherForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.isSubmitting = false;
        this.router.navigate(['/teachers', res.data.id, 'info']);
      }, () => {
        this.isSubmitting = false;
      });
  }
  createSupportStaff() {
    this.supportStaffService.save({ ...this.newTeacherForm.value, staff_type: this.supportStaff })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.isSubmitting = false;
        this.router.navigate(['/support-staffs', res.data.id, 'info']);
      }, () => this.isSubmitting = false);
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
