import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-view-class-level',
  templateUrl: './view-class-level.component.html',
  styleUrls: ['./view-class-level.component.css']
})
export class ViewClassLevelComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
