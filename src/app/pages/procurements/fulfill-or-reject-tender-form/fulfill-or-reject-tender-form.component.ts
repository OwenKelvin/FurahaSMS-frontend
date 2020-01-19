import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcurementService } from 'src/app/services/procurement.service';
import { closeDialog } from 'src/app/store/actions/dialog.actions';

@Component({
  selector: 'app-fulfill-or-reject-tender-form',
  templateUrl: './fulfill-or-reject-tender-form.component.html',
  styleUrls: ['./fulfill-or-reject-tender-form.component.css']
})
export class FulfillOrRejectTenderFormComponent implements OnInit {
  @Input() fulfilled: boolean;
  @Input() tenderId: boolean;
  fulfilledTenderForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;
  constructor(private store: Store<fromStore.AppState>, private fb: FormBuilder, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.isSubmitting = false;
    this.triggerValidation = false;
    this.fulfilledTenderForm = this.fb.group({
      comment: ['', [Validators.required]],
    });
  }

  submitFulfilledTenderForm() {
    this.isSubmitting = true;
    this.procurementService.setFulfillment({
      tenderId: this.tenderId,
      fulfilled: this.fulfilled,
      ...this.fulfilledTenderForm.value
    })
      .subscribe(item => {
        this.isSubmitting = false;
        this.store.dispatch(closeDialog());
      }, err => this.isSubmitting = false);
  }
  closeDialog() {
    const dialogCloseConfirmed = confirm('Are you sure you wish to close the bid fulfillent form?');
    if (dialogCloseConfirmed) {
      this.store.dispatch(closeDialog());
    }
  }

}
