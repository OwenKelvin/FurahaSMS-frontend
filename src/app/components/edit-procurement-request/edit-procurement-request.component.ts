import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-edit-procurement-request',
  templateUrl: './edit-procurement-request.component.html',
  styleUrls: ['./edit-procurement-request.component.css']
})
export class EditProcurementRequestComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
