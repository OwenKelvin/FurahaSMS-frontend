import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-create-unit-categories',
  templateUrl: './create-unit-categories.component.html',
  styleUrls: ['./create-unit-categories.component.css']
})
export class CreateUnitCategoriesComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
