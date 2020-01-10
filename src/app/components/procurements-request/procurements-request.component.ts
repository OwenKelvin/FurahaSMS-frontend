import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { ProcurementService } from 'src/app/services/procurement.service';

@Component({
  selector: 'app-procurements-request',
  templateUrl: './procurements-request.component.html',
  styleUrls: ['./procurements-request.component.css']
})
export class ProcurementsRequestComponent implements OnInit {
  procurementRequestForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  formSubmitted: boolean;
  submitError: boolean;
  showErrorMessage: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router,
    private procurementService: ProcurementService
  ) { }

  ngOnInit() {
    this.triggerValidation = true;
    this.procurementRequestForm = this.fb.group({
      name: ['q', [Validators.required]],
      category: ['q', [Validators.required]],
      description: ['q'],
      quantity: ['q', [Validators.required]],
    });
  }

  submitProcurementRequestForm() {
    this.isSubmitting = true;
    if (this.procurementRequestForm.valid) {
      this.procurementService.makeNewProcurementRequest(this.procurementRequestForm.value).subscribe(results => {
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true, toastBody: 'Procurement Request Successfully sent', toastHeader: 'Successful', toastTime: 'just now'
        }));
        this.isSubmitting = false;
        this.formSubmitted = true;
        this.router.navigate(['/procurements/my-requests']);
      }, error => {
        this.formSubmitted = true;
        console.log(error); // TODO Handle Student creation error
        this.isSubmitting = false;
      });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }

}
