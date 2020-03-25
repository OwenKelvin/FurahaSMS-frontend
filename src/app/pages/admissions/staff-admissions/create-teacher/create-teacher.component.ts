import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { debounceTime, takeWhile } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { SupportStaffService } from '../../services/support-staff.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit, OnDestroy {
  @Input() supportStaff: {id: number, name: string};
  newTeacherForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;
  componentIsActive: boolean;
  confirmData: boolean;
  usersData: any;
  confirmedData: boolean;

  constructor(
    private users: UsersService,
    private store: Store<AppState>,
    private fb: FormBuilder, private teacherService: TeacherService,
    private router: Router,
    private supportStaffService: SupportStaffService
  ) { }

  ngOnInit() {
    this.isSubmitting = false;
    this.newTeacherForm = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      middleName: [''],
      otherNames: [''],
      religion: [''],
      gender: [''],
      namePrefix: ['']
    });
    this.componentIsActive = true;
    this.subscribeToEmailChecking();
  }
  subscribeToEmailChecking(): void {

    (this.newTeacherForm.get('email') as FormControl).valueChanges.pipe(
      debounceTime(1000)
    ).pipe(
      takeWhile(() => this.componentIsActive)
    )
      .subscribe(
        (event) => {
          if (event && event.length && event.length > 5) {
            this.users.findIfEmailExists(event).subscribe(data => {
              this.confirmData = false;
              if (data) {
                this.confirmData = true;
              }
              this.usersData = data;
              this.confirmedData = true;
            });
          }
        }
      );
  }
  get email(): FormControl {
    return this.newTeacherForm.get('email') as FormControl;
  }
  updateFieldsForEmail() {
    const data = this.usersData;
    (this.newTeacherForm.get('firstName') as FormControl).setValue(data.first_name);
    (this.newTeacherForm.get('lastName') as FormControl).setValue(data.last_name);
    (this.newTeacherForm.get('middleName') as FormControl).setValue(data.middle_name);
    (this.newTeacherForm.get('otherNames') as FormControl).setValue(data.other_names);
    (this.newTeacherForm.get('namePrefix') as FormControl).setValue(data.name_prefix_id);
    (this.newTeacherForm.get('dateOfBirth') as FormControl).setValue(data.date_of_birth);
    (this.newTeacherForm.get('gender') as FormControl).setValue(data.gender_id);
    (this.newTeacherForm.get('religion') as FormControl).setValue(data.religion_id);
    this.confirmData = false;
    this.confirmedData = true;
  }
  clearEmail() {
    this.email.setValue('');
    this.usersData = null;
    this.confirmData = false;
    this.confirmedData = false;
    (this.newTeacherForm.get('firstName') as FormControl).setValue('');
    (this.newTeacherForm.get('lastName') as FormControl).setValue('');
    (this.newTeacherForm.get('middleName') as FormControl).setValue('');
    (this.newTeacherForm.get('otherNames') as FormControl).setValue('');
    (this.newTeacherForm.get('namePrefix') as FormControl).setValue('');
    (this.newTeacherForm.get('dateOfBirth') as FormControl).setValue('');
    (this.newTeacherForm.get('gender') as FormControl).setValue('');
    (this.newTeacherForm.get('religion') as FormControl).setValue('');
  }
  submitNewTeacherForm() {
    this.isSubmitting = true;
    if (this.supportStaff && this.supportStaff.id !== 0) {
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
        this.store.dispatch(loadToastShowsSuccess({
          toastHeader: 'Success',
          showMessage: true,
          toastTime: 'Just Now',
          toastBody: res.message
        }));
        this.router.navigate(['/teachers', res.data.id, 'info']);
      }, err => {
        this.isSubmitting = false;
      });
  }
  createSupportStaff() {
    this.supportStaffService.save({ ...this.newTeacherForm.value, staff_type: this.supportStaff.id })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.isSubmitting = false;
        this.store.dispatch(loadToastShowsSuccess({
          toastHeader: 'Success',
          showMessage: true,
          toastTime: 'Just Now',
          toastBody: res.message
        }));
        this.router.navigate(['/support-staffs', res.data.id, 'info']);
      }, err => {
        this.isSubmitting = false;
      });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
