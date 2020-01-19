import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { CREATE_PROCUREMENT_VENDOR, EDIT_PROCUREMENT_VENDOR, VIEW_PROCUREMENT_VENDOR } from 'src/app/helpers/links.helpers';
import { ProcurementService } from 'src/app/services/procurement.service';

@Component({
  selector: 'app-procurements-vendors',
  templateUrl: './procurements-vendors.component.html',
  styleUrls: ['./procurements-vendors.component.css']
})
export class ProcurementsVendorsComponent implements OnInit {
  editProcurementVendor: any;
  createProcurementVendor: any;
  viewProcurementVendor: any;
  categories: any;

  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) { }

  ngOnInit() {
    this.createProcurementVendor = CREATE_PROCUREMENT_VENDOR;
    this.editProcurementVendor = EDIT_PROCUREMENT_VENDOR;
    this.viewProcurementVendor = VIEW_PROCUREMENT_VENDOR;
    this.categories = {
      ...this.procurementService,
      getAll: this.procurementService.getVendors,
      deleteItem: this.procurementService.deleteVendor,
    };
  }

}
