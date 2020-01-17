import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FulfillOrRejectTenderFormComponent } from '../../fulfill-or-reject-tender-form/fulfill-or-reject-tender-form.component';
import { selectDialogShowState } from 'src/app/store/selectors/dialog.selector';
import { showDialog } from 'src/app/store/actions/dialog.actions';

@Component({
  selector: 'app-view-procurement-tenders-awarded',
  templateUrl: './view-procurement-tenders-awarded.component.html',
  styleUrls: ['./view-procurement-tenders-awarded.component.css']
})
export class ViewProcurementTendersAwardedComponent implements OnInit {

  procurementTenders$: Observable<any>;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  bsModalRef: any;

  constructor(
    private modalService: BsModalService,
    private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.procurementTenders$ = this.procurementService.getAwardedTenders();
    this.procurementTenders$.subscribe( e => console.log(e));
  }

  openModalWithComponent(tenderId, fulfilled) {
    this.bsModalRef = this.modalService.show(FulfillOrRejectTenderFormComponent, this.config);
    this.bsModalRef.content.tenderId = tenderId;
    this.bsModalRef.content.fulfilled = fulfilled;
    const sub = this.store.select(selectDialogShowState).subscribe(hide => {
      if (hide) {
        this.bsModalRef.hide();
        sub.unsubscribe();
        this.store.dispatch(showDialog());
      }
    });
  }

}
