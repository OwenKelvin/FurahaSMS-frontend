import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-students-recently-created',
  templateUrl: './students-recently-created.component.html',
  styleUrls: ['./students-recently-created.component.css']
})
export class StudentsRecentlyCreatedComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
