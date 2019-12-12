import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-procurements',
  templateUrl: './procurements.component.html',
  styleUrls: ['./procurements.component.css']
})
export class ProcurementsComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
