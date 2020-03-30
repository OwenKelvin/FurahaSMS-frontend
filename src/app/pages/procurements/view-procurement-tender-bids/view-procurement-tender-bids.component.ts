import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { ProcurementService } from 'src/app/services/procurement.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-view-procurement-tender-bids',
  templateUrl: './view-procurement-tender-bids.component.html',
  styleUrls: ['./view-procurement-tender-bids.component.css']
})
export class ViewProcurementTenderBidsComponent implements OnInit, OnDestroy {
  // @Input() procurementRequestId;
  // bids$: Observable<any>;
  @Input() items: any[];
  bids: any[];
  isOpen: boolean[];
  awarding: boolean[];
  isAwarded: boolean;
  componentIsActive: boolean;
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.isOpen = [false];
    this.awarding = [false];
    this.bids = this.items;
    this.isAwarded = this.bids.every(bid => bid.awarded);
  }
  awardBidTo(tenderId: number, bidId: number, i: number) {
    this.awarding[i] = true;
    const data = {
      awarded: true
    };
    this.procurementService.awardBid({ tenderId, bidId, data })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true,
        toastBody: 'Bid Successfully awarded',
        toastHeader: 'Success',
        toastTime: 'Just Now'
      }));
      this.awarding[i] = false;
    }, () => this.awarding[i] = true );
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
