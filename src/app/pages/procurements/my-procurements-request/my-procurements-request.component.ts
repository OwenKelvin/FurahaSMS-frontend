import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-procurements-request',
  templateUrl: './my-procurements-request.component.html',
  styleUrls: ['./my-procurements-request.component.css']
})
export class MyProcurementsRequestComponent implements OnInit {

  procurementRequests$: Observable<any>;
  itemService: any;
  createNewProcurementRequest: string;
  editProcurementRequest: any;
  viewProcurementRequest: any;
  constructor(private procurementService: ProcurementService) { }

  ngOnInit() {
    // this.procurementRequests$ = this.procurementService.getMyRequests();
    this.itemService = {
      ...this.procurementService,
      all$: this.procurementService.getMyRequests,
      deleteItem: this.procurementService.deleteProcurementRequest
    };

  }

}
