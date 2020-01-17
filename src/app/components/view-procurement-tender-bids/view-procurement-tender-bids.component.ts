import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { Observable } from 'rxjs';
import { ProcurementService } from 'src/app/services/procurement.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-view-procurement-tender-bids',
  templateUrl: './view-procurement-tender-bids.component.html',
  styleUrls: ['./view-procurement-tender-bids.component.css']
})
export class ViewProcurementTenderBidsComponent implements OnInit {
  // @Input() procurementRequestId;
  // bids$: Observable<any>;
  @Input() items;
  bids: any[];
  isOpen: boolean[];
  awarding: boolean[];
  isAwarded: boolean;
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.isOpen = [false];
    this.awarding = [false];
    this.bids = this.items;
    this.isAwarded = this.bids.every(bid => bid.awarded);
  }
  awardBidTo(tenderId, bidId, i) {
    this.awarding[i] = true;
    const data = {
      awarded: true
    };
    this.procurementService.awardBid({ tenderId, bidId, data }).subscribe(res => {
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true,
        toastBody: 'Bid Successfully awarded'
      }));
      this.awarding[i] = false;
    }, err => this.awarding[i] = true );
  }

}
