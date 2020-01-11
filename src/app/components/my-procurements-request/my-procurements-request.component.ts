import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';
import { CREATE_PROCUREMENT_PROPOSAL_REQUEST, EDIT_PROCUREMENT_PROPOSAL_REQUEST, VIEW__PROCUREMENT_PROPOSAL_REQUEST } from 'src/app/helpers/links.helpers';

@Component({
  selector: 'app-my-procurements-request',
  templateUrl: './my-procurements-request.component.html',
  styleUrls: ['./my-procurements-request.component.css']
})
export class MyProcurementsRequestComponent implements OnInit {

  procurementRequests$: Observable<any>;
  categories: any;
  createNewProcurementRequest: string;
  editProcurementRequest: any;
  viewProcurementRequest: any;
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.procurementRequests$ = this.procurementService.getMyRequests();
    this.categories = {
      ...this.procurementService,
      getAll: this.procurementService.getMyRequests,
      deleteItem: this.procurementService.deleteProcurementRequest
    }
    this.createNewProcurementRequest = CREATE_PROCUREMENT_PROPOSAL_REQUEST;
    this.editProcurementRequest = EDIT_PROCUREMENT_PROPOSAL_REQUEST;
    this.viewProcurementRequest = VIEW__PROCUREMENT_PROPOSAL_REQUEST
  }

}
