import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-edit-unit-category',
  templateUrl: './edit-unit-category.component.html',
  styleUrls: ['./edit-unit-category.component.css']
})
export class EditUnitCategoryComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
