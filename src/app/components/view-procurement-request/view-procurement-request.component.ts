import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-procurement-request',
  templateUrl: './view-procurement-request.component.html',
  styleUrls: ['./view-procurement-request.component.css']
})
export class ViewProcurementRequestComponent implements OnInit {
  procurementItem$: Observable<any>;
  constructor(
    private route: ActivatedRoute ,
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.procurementItem$ = this.procurementService.getProcurementRequestWithId(+params.get('id'));
    });

  }

}