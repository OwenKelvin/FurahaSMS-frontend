import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-procurements-vendor',
  templateUrl: './view-procurements-vendor.component.html',
  styleUrls: ['./view-procurements-vendor.component.css']
})
export class ViewProcurementsVendorComponent implements OnInit {
  procurementVendor$: Observable<any>;
  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService, private router: Router) { }

  ngOnInit() {
    const id = this.router.routerState.snapshot.root.firstChild.firstChild.firstChild.params.id;
    this.procurementVendor$ = this.procurementService.getVendor(id);
  }

}
