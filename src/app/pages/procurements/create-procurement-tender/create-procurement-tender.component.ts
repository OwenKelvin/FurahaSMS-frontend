import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { selectDialogShowState, selectDialogState } from 'src/app/store/selectors/dialog.selector';

@Component({
  selector: 'app-create-procurement-tender',
  templateUrl: './create-procurement-tender.component.html',
  styleUrls: ['./create-procurement-tender.component.css']
})
export class CreateProcurementTenderComponent implements OnInit {
  procurementItem$: Observable<any>;
  tenderForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService,
    private router: Router,

    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.procurementItem$ = this.procurementService.getProcurementRequestWithId(+params.get('id'));
    });

    this.tenderForm = this.fb.group({
      expiryDatetime: ['', [Validators.required]],
      // expiryDatetime: ['', [Validators.required, Validators.pattern('[0-30]')]],
      description: ['', Validators.required]
    });

  }
  submitTenderForm() {
    this.isSubmitting = true;
    this.procurementItem$.subscribe(item => {
      this.procurementService.createTender({
        ...this.tenderForm.value,
        procurement_request_id: item.id,
        expiry_datetime: this.tenderForm.value.expiryDatetime
      }).subscribe(res => {
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true, toastBody: res.message , toastHeader: 'Successful', toastTime: 'just now'
        }));
        this.isSubmitting = false;
      }, err => this.isSubmitting = false);
    });

  }

}
