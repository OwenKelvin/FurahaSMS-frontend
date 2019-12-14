import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-create-class-level',
  templateUrl: './create-class-level.component.html',
  styleUrls: ['./create-class-level.component.css']
})
export class CreateClassLevelComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
