import { Component, OnInit } from '@angular/core';
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
  itemService: any;

  constructor(private procurementService: ProcurementService) { }

  ngOnInit() {

    this.itemService = {
      ...this.procurementService,
      all$: this.procurementService.getVendors(),
      deleteItem: this.procurementService.deleteVendor,
    };
  }

}
