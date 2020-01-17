import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcurementService } from 'src/app/services/procurement.service';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { Observable } from 'rxjs';
import { closeDialog } from 'src/app/store/actions/dialog.actions';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-create-procurement-tender-bid',
  templateUrl: './create-procurement-tender-bid.component.html',
  styleUrls: ['./create-procurement-tender-bid.component.css']
})
export class CreateProcurementTenderBidComponent implements OnInit {
  newBidForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;
  @Input() tenderId;
  errorBody$: Observable<any>;
  constructor(
    private procurementService: ProcurementService,
    private store: Store<fromStore.AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.errorBody$ = this.store.select(selectErrorState);
    this.newBidForm = this.fb.group({
      vendorName: ['', [ Validators.required ]],
      unitDescription: ['', [Validators.required ]],
      pricePerUnit: ['', [Validators.required ]],
      description: ['']
    });
  }
  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }
  closeDialog() {
    const dialogCloseConfirmed = confirm('Are you sure you wish to close add bid form?');
    if (dialogCloseConfirmed) {
      this.store.dispatch(closeDialog());
    }
  }
  submitNewBidForm() {
    this.isSubmitting = true;
    const data = { data: this.newBidForm.value, tenderId: this.tenderId };
    this.procurementService.createBid(data).subscribe(res => {
      this.isSubmitting = false;
      this.store.dispatch(closeDialog());
    }, err => {
        this.isSubmitting = false;
    });
  }

}
