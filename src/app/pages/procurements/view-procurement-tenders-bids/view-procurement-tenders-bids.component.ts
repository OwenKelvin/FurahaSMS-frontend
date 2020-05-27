import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateProcurementTenderBidComponent } from '../create-procurement-tender-bid/create-procurement-tender-bid.component';
import { selectDialogShowState } from 'src/app/store/selectors/dialog.selector';
import { showDialog } from 'src/app/store/actions/dialog.actions';
import { mergeMap, map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-view-procurement-tenders-bids',
  templateUrl: './view-procurement-tenders-bids.component.html',
  styleUrls: ['./view-procurement-tenders-bids.component.css']
})
export class ViewProcurementTendersBidsComponent implements OnInit, OnDestroy {
  procurementRequest$: Observable<any>;
  bsModalRef: BsModalRef;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  componentActive = true;
  componentIsActive: boolean;
  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.procurementRequest$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.procurementService.getProcurementRequestWithId(id)));

  }
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(CreateProcurementTenderBidComponent, this.config);
    this.route.paramMap
      .subscribe(params => {
      this.bsModalRef.content.tenderId = Number(params.get('id'));
      this.store.select(selectDialogShowState)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(hide => {
        if (hide) {
          this.bsModalRef.hide();
          this.store.dispatch(showDialog());
        }
      });
    });


  }
  ngOnDestroy() {
    this.componentActive = false;
    this.componentIsActive = false;
  }
}
