import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import {ProcurementService} from 'src/app/services/procurement.service';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-view-procurement-request',
  templateUrl: './view-procurement-request.component.html',
  styleUrls: ['./view-procurement-request.component.css']
})
export class ViewProcurementRequestComponent {
  procurementItem$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.procurementService.getProcurementRequestWithId(id))
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService) {
  }
}
