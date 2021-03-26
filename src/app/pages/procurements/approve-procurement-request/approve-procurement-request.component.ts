import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import {ProcurementService} from 'src/app/services/procurement.service';
import {takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-approve-procurement-request',
  templateUrl: './approve-procurement-request.component.html',
  styleUrls: ['./approve-procurement-request.component.css']
})
export class ApproveProcurementRequestComponent extends subscribedContainerMixin() {

  procurementItems$ = this.procurementService.getRequestsPendingApproval();
  isOpen = [false];
  isApproving: boolean[] = [false];
  isRejecting: boolean[] = [false];
  isApprovingSubject$ = new BehaviorSubject([false]);
  isRejectingSubject$ = new BehaviorSubject([false]);

  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) {
    super();
  }

  approve(procurementItemId: number, i: number) {
    this.isApproving[i] = true;
    this.procurementService.approveRequest({['procurement_request_id']: procurementItemId, approve: true})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
        this.isApproving[i] = false;
      });

  }

  reject(procurementItemId: number, i: number) {
    this.isRejecting[i] = true;
    this.procurementService.approveRequest({['procurement_request_id']: procurementItemId, approve: false})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isRejecting[i] = false;
        this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
      });
  }

}
