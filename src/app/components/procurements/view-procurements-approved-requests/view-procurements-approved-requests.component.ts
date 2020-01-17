import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-procurements-approved-requests',
  templateUrl: './view-procurements-approved-requests.component.html',
  styleUrls: ['./view-procurements-approved-requests.component.css']
})
export class ViewProcurementsApprovedRequestsComponent implements OnInit {
  procurementItems$: Observable<any>;
  isOpen: boolean[];
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.isOpen = [false];
    this.procurementItems$ = this.procurementService.getRequestsPendingTendering();
  }

}
