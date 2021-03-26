import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcurementService } from 'src/app/services/procurement.service';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { Observable } from 'rxjs';
import { closeDialog } from 'src/app/store/actions/dialog.actions';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-procurement-tender-bid',
  templateUrl: './create-procurement-tender-bid.component.html',
  styleUrls: ['./create-procurement-tender-bid.component.css']
})
export class CreateProcurementTenderBidComponent implements OnInit, OnDestroy {
  @Input() tenderId: number;
  newBidForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;
  errorBody$: Observable<any>;
  componentIsActive: boolean;
  constructor(
    private procurementService: ProcurementService,
    private store: Store<fromStore.AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.componentIsActive = true;
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
    this.procurementService.createBid(data)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
      this.isSubmitting = false;
      this.store.dispatch(closeDialog());
    }, () => {
        this.isSubmitting = false;
    });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
