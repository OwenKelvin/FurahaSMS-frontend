import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-approve-procurement-request',
  templateUrl: './approve-procurement-request.component.html',
  styleUrls: ['./approve-procurement-request.component.css']
})
export class ApproveProcurementRequestComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
