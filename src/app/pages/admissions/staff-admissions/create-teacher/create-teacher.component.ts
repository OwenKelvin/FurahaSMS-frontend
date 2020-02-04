import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  newTeacherForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder, private teacherService: TeacherService) { }

  ngOnInit() {
    this.isSubmitting = false;
    this.newTeacherForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      middleName: [''],
      otherNames: [''],
    });
  }
  
  submitNewTeacherForm() {
    this.isSubmitting = true;
    this.teacherService.store(this.newTeacherForm.value).subscribe(res => {
      this.isSubmitting = false;
      this.store.dispatch(loadToastShowsSuccess({
        toastHeader: 'Success',
        showMessage: true,
        toastTime: 'Just Now',
        toastBody: res.message
      }));
    }, err => {
      this.isSubmitting = false
    })
  }

}
