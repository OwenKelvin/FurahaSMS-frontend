import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-approve-procurement-request',
  templateUrl: './approve-procurement-request.component.html',
  styleUrls: ['./approve-procurement-request.component.css']
})
export class ApproveProcurementRequestComponent implements OnInit {

  procurementItems$: Observable<any>;
  isOpen: boolean[];
  isApproving: boolean[];
  isRejecting: boolean[];
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
    this.isOpen = [false];
    this.isRejecting = [false];
    this.isApproving = [false];
  }
  approve(procurementItemId: number, i: number) {
    this.isApproving[i] = true;
    this.procurementService.approveRequest({ procurement_request_id: procurementItemId, approve: true }).subscribe(res => {
      this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
    });

  }
  reject(procurementItemId: number, i: number) {
    this.isRejecting[i] = true;
    this.procurementService.approveRequest({ procurement_request_id: procurementItemId, approve: false }).subscribe(res => {
      this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
    });
  }

}
