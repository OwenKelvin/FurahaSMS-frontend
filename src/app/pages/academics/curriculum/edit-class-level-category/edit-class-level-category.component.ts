import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';

@Component({
  selector: 'app-edit-class-level-category',
  templateUrl: './edit-class-level-category.component.html',
  styleUrls: ['./edit-class-level-category.component.css']
})
export class EditClassLevelCategoryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
}
