import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import {ProcurementService} from 'src/app/services/procurement.service';
import {Observable} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {loadToastShowsSuccess} from 'src/app/store/actions/toast-show.actions';
import {selectDialogShowState, selectDialogState} from 'src/app/store/selectors/dialog.selector';
import {map, mergeMap, takeUntil, takeWhile} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-create-procurement-tender',
  templateUrl: './create-procurement-tender.component.html',
  styleUrls: ['./create-procurement-tender.component.css']
})
export class CreateProcurementTenderComponent extends subscribedContainerMixin() {
  procurementItem$: Observable<any> = this.route.paramMap
    .pipe(map(params => Number(params.get('id'))))
    .pipe(mergeMap(id => this.procurementService.getProcurementRequestWithId(id)));
  // this.route.paramMap.subscribe(params => {
  //   this.procurementItem$ = this.procurementService.getProcurementRequestWithId(Number(params.get('id')));
  // });;
  tenderForm: FormGroup = this.fb.group({
    expiryDatetime: ['', [Validators.required]],
    // expiryDatetime: ['', [Validators.required, Validators.pattern('[0-30]')]],
    description: ['', Validators.required]
  });
  triggerValidation: boolean;
  isSubmitting: boolean;
  componentIsActive: boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    super();
  }

  submitTenderForm() {
    this.isSubmitting = true;
    this.procurementItem$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(item => {
        this.procurementService.createTender({
          ...this.tenderForm.value,
          ['procurement_request_id']: item.id,
          ['expiry_datetime']: this.tenderForm.value.expiryDatetime
        })
          .pipe(takeUntil(this.destroyed$))
          .subscribe(() => {
            this.isSubmitting = false;
          }, () => this.isSubmitting = false);
      });

  }

}
