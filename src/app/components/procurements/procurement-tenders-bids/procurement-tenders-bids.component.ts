import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { ProcurementService } from 'src/app/services/procurement.service';

@Component({
  selector: 'app-procurement-tenders-bids',
  templateUrl: './procurement-tenders-bids.component.html',
  styleUrls: ['./procurement-tenders-bids.component.css']
})
export class ProcurementTendersBidsComponent implements OnInit {

  procurementItems$: Observable<any>;
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.procurementItems$ = this.procurementService.getRequestsTendered();
  }

}
