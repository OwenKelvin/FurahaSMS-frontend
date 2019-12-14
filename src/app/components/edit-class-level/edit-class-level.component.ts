import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-edit-class-level',
  templateUrl: './edit-class-level.component.html',
  styleUrls: ['./edit-class-level.component.css']
})
export class EditClassLevelComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
