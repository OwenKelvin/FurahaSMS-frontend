import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-view-unit-category',
  templateUrl: './view-unit-category.component.html',
  styleUrls: ['./view-unit-category.component.css']
})
export class ViewUnitCategoryComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
