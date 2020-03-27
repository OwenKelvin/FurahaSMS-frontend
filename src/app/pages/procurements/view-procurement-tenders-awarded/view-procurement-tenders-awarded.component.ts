import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FulfillOrRejectTenderFormComponent } from '../fulfill-or-reject-tender-form/fulfill-or-reject-tender-form.component';
import { selectDialogShowState } from 'src/app/store/selectors/dialog.selector';
import { showDialog } from 'src/app/store/actions/dialog.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-view-procurement-tenders-awarded',
  templateUrl: './view-procurement-tenders-awarded.component.html',
  styleUrls: ['./view-procurement-tenders-awarded.component.css']
})
export class ViewProcurementTendersAwardedComponent implements OnInit, OnDestroy {

  procurementTenders$: Observable<any>;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  bsModalRef: BsModalRef;
  componentIsActive: boolean;

  constructor(
    private modalService: BsModalService,
    private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.componentIsActive = true;

    this.procurementTenders$ = this.procurementService.getAwardedTenders();
  }

  openModalWithComponent(tenderId: number, fulfilled: boolean) {
    this.bsModalRef = this.modalService.show(FulfillOrRejectTenderFormComponent, this.config);
    this.bsModalRef.content.tenderId = tenderId;
    this.bsModalRef.content.fulfilled = fulfilled;
    this.store.select(selectDialogShowState)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(hide => {
      if (hide) {
        this.bsModalRef.hide();
        this.store.dispatch(showDialog());
      }
    });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
