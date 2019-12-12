import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AcademicYearService } from 'src/app/services/academic-year.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageInterface } from 'src/app/interfaces/message.interface';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-create-academic-year',
  templateUrl: './create-academic-year.component.html',
  styleUrls: ['./create-academic-year.component.css']
})
export class CreateAcademicYearComponent implements OnInit {
  academicYearForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  showError: boolean;
  errorMessage$: Observable<MessageInterface>;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private academicYear: AcademicYearService,
    private router: Router
  ) { }

  ngOnInit() {
    this.academicYearForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }
  submitAcademicYearForm() {
    if (this.academicYearForm.valid) {
      this.isSubmitting = true;
      this.academicYear.save(this.academicYearForm.value).subscribe(item => {
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: 'Successfully Created Academic Year',
          toastHeader: 'Success'
        }));
        this.router.navigate(['/academic-year/', item.id]);
      }, error => {
        this.store.dispatch(loadErrorMessagesSuccess({
          show: true,
          body: error.help,
          title: error.message,
          status: error.status
        }));
        this.showError = true;
        this.isSubmitting = false;
      });
    } else {
    }
  }

}
// help: "Academic year already exists"
// message: "Unprocessable Entity: The given data was invalid."
// status: 422
// type: "error"
