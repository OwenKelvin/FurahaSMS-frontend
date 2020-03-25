import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-procurements-vendor',
  templateUrl: './view-procurements-vendor.component.html',
  styleUrls: ['./view-procurements-vendor.component.css']
})
export class ViewProcurementsVendorComponent implements OnInit {
  procurementVendor$: Observable<any>;
  constructor(
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.procurementVendor$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.procurementService.getVendor(id)));


  }

}
